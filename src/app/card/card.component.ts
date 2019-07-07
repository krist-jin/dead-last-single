import { AppService } from './../app.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SuiteType } from '../app.constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  cardType: SuiteType;

  @Input()
  isFullScreen = false;

  @Input()
  cardNumber: number;

  @Input()
  isAmbush = false;

  @Input()
  isEdit = false;

  @Input()
  isHidden = false;

  @Input()
  isSelected = false;

  @Output()
  cardClicked: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  exitFullScreen: EventEmitter<boolean> = new EventEmitter<boolean>();

  SuiteType = SuiteType;

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

  onClickCard(event) {
    if (!this.isFullScreen && !this.isEdit && !this.isHidden) {
      this.cardClicked.emit(this.cardNumber);
    }
    event.stopPropagation();
  }

  onClickClose() {
    this.isFullScreen = false;
    this.exitFullScreen.emit();
  }

  onClickToggleVisible(event) {
    event.stopPropagation();
    this.isHidden = !this.isHidden;
  }

  setIsSelected(isSelected: boolean) {
    this.isSelected = isSelected;
  }

  getCardContent() {
    if (this.cardType === SuiteType.vote) {
      return this.isAmbush ? 'AMBUSH' : this.cardNumber;
    }
    if (this.cardType === SuiteType.showdown) {
      switch (this.cardNumber) {
        case 1:
          return 'SHARE';
        case 2:
          return 'STEAL';
        case 3:
          return 'GRAB ONE & GO';
      }
    }
  }
}
