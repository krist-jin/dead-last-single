import { AboutComponent } from './dialogs/about/about.component';
import { AppService } from './app.service';
import { Component, ViewChild } from '@angular/core';
import { SuiteType } from './app.constants';
import { CardSuiteComponent } from './card-suite/card-suite.component';
import { MatTab, MatTabChangeEvent, MatDialog, MatSidenav, MatIconRegistry } from '@angular/material';
import { GetGoldDialogComponent } from './dialogs/get-gold-dialog/get-gold-dialog.component';
import { SettingsDialogComponent, GameSettings } from './dialogs/settings-dialog/settings-dialog.component';
import { RulesComponent } from './dialogs/rules/rules.component';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCardDisplayMode = false;

  gameMode: SuiteType = SuiteType.vote;

  playerCount = 12;

  myNumber = 1;

  gold = 0;

  activeTabIndex = 0;

  @ViewChild('sidenav')
  sidenavComponent: MatSidenav;

  @ViewChild('voteSuite')
  voteSuiteComponent: CardSuiteComponent;

  @ViewChild('showdownSuite')
  showdownSuiteComponent: CardSuiteComponent;

  @ViewChild('voteTab')
  voteTabComponent: MatTab;

  @ViewChild('showdownTab')
  showdownTabComponent: MatTab;

  SuiteType = SuiteType;

  constructor(
    public appService: AppService,
    public dialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'Chinese',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/chinese.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'English',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/english.svg')
    );
    this.appService.getCachedSettings().then(values => {
      console.log(values);
      if (values && values.length === 3) {
        if (_.isNil(values[0]) || _.isNil(values[1]) || _.isNil(values[2])) {
          this.onClickNewGame();
        } else {
          this.playerCount = values[0];
          this.myNumber = values[1];
          this.gold = values[2];
        }
      }
    });
  }

  getSelectedCardNumber() {
    if (this.gameMode === SuiteType.vote) {
      return this.voteSuiteComponent && this.voteSuiteComponent.selectedCardNumber;
    }
    if (this.gameMode === SuiteType.showdown) {
      return this.showdownSuiteComponent && this.showdownSuiteComponent.selectedCardNumber;
    }
  }

  clearSettings() {
    this.gameMode = SuiteType.vote;
    this.activeTabIndex = 0;
    this.playerCount = 0;
    this.myNumber = 0;
    this.gold = 0;
  }

  onClickBlank() {
    this.voteSuiteComponent.clearSelection();
    this.showdownSuiteComponent.clearSelection();
  }

  onClickGo() {
    this.isCardDisplayMode = true;
    this.appService.playKillAudio();
  }

  onClickGetGold() {
    const dialogRef = this.dialog.open(GetGoldDialogComponent, {
      width: '250px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.gold += result;
        this.appService.saveSettings(this.playerCount, this.myNumber, this.gold).then(values => {
          console.log(values);
        });
      }
    });
  }

  onClickNewGame() {
    // this.clearSettings();
    this.onClickSettings(true);
  }

  onClickRules() {
    this.sidenavComponent.close();
    const dialogRef = this.dialog.open(RulesComponent, {
      width: '100vw',
      height: '100vh',
      minWidth: '100vw',
      minHeight: '100vh',
      panelClass: 'mat-dialog-no-padding'
    });
  }

  onClickSettings(isNewGame: boolean) {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      width: '250px',
      disableClose: true,
      data: {
        playerCount: this.playerCount,
        myNumber: this.myNumber,
        gold: this.gold,
        isNew: isNewGame
      }
    });

    dialogRef.afterClosed().subscribe((result: GameSettings) => {
      if (result) {
        this.playerCount = result.playerCount;
        this.myNumber = result.myNumber;
        this.gold = result.gold;
        this.appService.saveSettings(this.playerCount, this.myNumber, this.gold).then(values => {
          console.log(values);
        });
      }
    });

    this.sidenavComponent.close();
  }

  onClickAbout() {
    this.sidenavComponent.close();
    const dialogRef = this.dialog.open(AboutComponent, {
      width: '100vw',
      height: '100vh',
      minWidth: '100vw',
      minHeight: '100vh',
      panelClass: 'mat-dialog-no-padding'
    });
  }

  onExitFullScreen() {
    this.isCardDisplayMode = false;
  }

  onTabChange(tabChangeEvent: MatTabChangeEvent) {
    this.voteSuiteComponent.clearSelection();
    this.showdownSuiteComponent.clearSelection();
    if (tabChangeEvent.index === 0) {
      this.gameMode = SuiteType.vote;
    } else {
      this.gameMode = SuiteType.showdown;
    }
  }
}
