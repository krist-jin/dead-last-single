import { Component, OnInit, Inject } from '@angular/core';
import * as _ from 'lodash';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface GameSettings {
  playerCount: number;
  myNumber: number;
  gold: number;
  isNew?: boolean;
}

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SettingsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameSettings
  ) { }

  ngOnInit() {
  }

  getNumberRange(low: number, high: number) {
    return _.range(low, high + 1);
  }

  onClickCancel() {
    this.dialogRef.close();
  }

  onClickConfirm() {
    this.dialogRef.close({
      playerCount: this.data.playerCount,
      myNumber: this.data.myNumber,
      gold: this.data.gold
    });
  }
}
