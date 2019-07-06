import { AppService } from './app.service';
import { Component, ViewChild } from '@angular/core';
import { SuiteType } from './app.constants';
import { CardSuiteComponent } from './card-suite/card-suite.component';
import { MatTab, MatTabChangeEvent, MatDialog, MatSidenav } from '@angular/material';
import { GetGoldDialogComponent } from './dialogs/get-gold-dialog/get-gold-dialog.component';
import { SettingsDialogComponent, GameSettings } from './dialogs/settings-dialog/settings-dialog.component';

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

  activeTabIndex = 0;

  @ViewChild('sidenav')
  sidenavComponent: MatSidenav;

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

  clearSettings() {
    this.gameMode = SuiteType.normal;
    this.activeTabIndex = 0;
    this.playerCount = 0;
    this.myNumber = 0;
    this.gold = 0;
  }

  onClickBlank() {
    this.normalSuiteComponent.clearSelection();
    this.showdownSuiteComponent.clearSelection();
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

  onClickNewGame() {
    // this.clearSettings();
    this.onClickSettings();
    this.sidenavComponent.close();
  }

  onClickSettings() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      width: '250px',
      disableClose: true,
      data: {
        playerCount: this.playerCount,
        myNumber: this.myNumber,
        gold: this.gold
      }
    });

    dialogRef.afterClosed().subscribe((result: GameSettings) => {
      if (result) {
        this.playerCount = result.playerCount;
        this.myNumber = result.myNumber;
        this.gold = result.gold;
      }
    });

    this.sidenavComponent.close();
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
