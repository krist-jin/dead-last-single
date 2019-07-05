import { Component, ViewChild } from '@angular/core';
import { SuiteType } from './app.constants';
import { CardSuiteComponent } from './card-suite/card-suite.component';
import { MatTab, MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCardDisplayMode = false;

  gameMode: SuiteType = SuiteType.normal;

  playerCount: number = 12;

  myNumber: number = 3;

  gold: number = 0;

  @ViewChild('normalSuite')
  normalSuiteComponent: CardSuiteComponent;

  @ViewChild('showdownSuite')
  showdownSuiteComponent: CardSuiteComponent;

  @ViewChild('normalTab')
  normalTabComponent: MatTab;

  @ViewChild('showdownTab')
  showdownTabComponent: MatTab;

  SuiteType = SuiteType;

  getSelectedCardNumber() {
    if (this.gameMode === SuiteType.normal) {
      return this.normalSuiteComponent && this.normalSuiteComponent.selectedCardNumber;
    }
    if (this.gameMode === SuiteType.showdown) {
      return this.showdownSuiteComponent && this.showdownSuiteComponent.selectedCardNumber;
    }
  }

  onClickGo() {
    this.isCardDisplayMode = true;
  }

  onExitFullScreen() {
    this.isCardDisplayMode = false;
  }

  onTabChange(tabChangeEvent: MatTabChangeEvent) {
    this.normalSuiteComponent.clearSelection();
    this.showdownSuiteComponent.clearSelection();
    if (tabChangeEvent.index === 0) {
      this.gameMode = SuiteType.normal;
    } else {
      this.gameMode = SuiteType.showdown;
    }
  }
}
