import { AppService } from './app.service';
import { Component, ViewChild } from '@angular/core';
import { SuiteType } from './app.constants';
import { CardSuiteComponent } from './card-suite/card-suite.component';
import { MatTab, MatTabChangeEvent, MatDialog } from '@angular/material';
import { GetGoldDialogComponent } from './dialogs/get-gold-dialog/get-gold-dialog.component';

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

  constructor(
    public appService: AppService,
    public dialog: MatDialog
  ) {}

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

  onClickGetGold() {
    const dialogRef = this.dialog.open(GetGoldDialogComponent, {
      width: '250px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.gold += result;
      }
    });
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
