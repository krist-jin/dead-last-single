import { AppService } from './../app.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { normalCardColorTable, SuiteType, showdownCardColorTable } from '../app.constants';

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
  isSelected = false;

  @Output()
  cardClicked: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  exitFullScreen: EventEmitter<boolean> = new EventEmitter<boolean>();

  SuiteType = SuiteType;

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

  onClickCard() {
    if (!this.isFullScreen) {
      this.cardClicked.emit(this.cardNumber);
    }
  }

  onClickClose() {
    this.isFullScreen = false;
    this.exitFullScreen.emit();
  }

  setIsSelected(isSelected: boolean) {
    this.isSelected = isSelected;
  }

  getCardContent() {
    if (this.cardType === SuiteType.normal) {
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
