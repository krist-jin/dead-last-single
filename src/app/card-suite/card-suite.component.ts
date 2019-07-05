import { CardComponent } from './../card/card.component';
import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { SuiteType } from '../app.constants';
import * as _ from 'lodash';

@Component({
  selector: 'app-card-suite',
  templateUrl: './card-suite.component.html',
  styleUrls: ['./card-suite.component.scss']
})
export class CardSuiteComponent implements OnInit {

  @Input()
  type: SuiteType;

  @Input()
  playerCount: number;

  @Input()
  myNumber: number;

  @ViewChildren(CardComponent)
  cardList: QueryList<CardComponent>;

  selectedCardNumber: number;

  SuiteType = SuiteType;

  get numberList() {
    if (this.type === SuiteType.normal) {
      return this.playerCount ? _.range(1, this.playerCount + 1) : [];
    }
    if (this.type === SuiteType.showdown) {
      return _.range(1, 4);  // only have 3 cards in the final showdown
    }
  }

  constructor() { }

  ngOnInit() {
  }

  selectCard(n: number) {
    if (this.selectedCardNumber) {
      const previousSelectedCard = this.cardList.toArray()[this.selectedCardNumber - 1];
      previousSelectedCard.setIsSelected(false);
      // console.log('previousSelectedCard: ', this.selectedCardNumber);
    }
    if (this.selectedCardNumber === n) {
      this.selectedCardNumber = null;
    } else {
      const currentSelectedCard = this.cardList.toArray()[n - 1];
      this.selectedCardNumber = n;
      currentSelectedCard.setIsSelected(true);
      // console.log('currentSelectedCard: ', this.selectedCardNumber);
    }
  }

  clearSelection() {
    if (this.selectedCardNumber) {
      const previousSelectedCard = this.cardList.toArray()[this.selectedCardNumber - 1];
      previousSelectedCard.setIsSelected(false);
    }
    this.selectedCardNumber = null;
  }
}
