import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'app-get-gold-dialog',
  templateUrl: './get-gold-dialog.component.html',
  styleUrls: ['./get-gold-dialog.component.scss']
})
export class GetGoldDialogComponent implements OnInit {

  goldCardCount: number;

  resultCards: number[] = [];
  points = 0;

  goldCardPool: number[];

  constructor(
    public dialogRef: MatDialogRef<GetGoldDialogComponent>
  ) {
    this.goldCardPool = [
      ..._.fill(Array(26), 3),  // 26 3-points card
      ..._.fill(Array(43), 4),  // 43 4-points card
      ..._.fill(Array(11), 5)   // 11 5-points card
    ];
  }

  ngOnInit() {
  }

  /**
   * reveal gold cards and count the number of gold bars
   * @param goldCardCount number of gold card
   */
  getGoldBars(goldCardCount: number) {
    this.resultCards = _.sampleSize(this.goldCardPool, goldCardCount);
    this.points = _.sum(this.resultCards);
  }

  onClickConfirm() {
    // console.log(this.goldCardCount);
    this.getGoldBars(this.goldCardCount);
    // this.dialogRef.close(this.points);
  }

  onClickClose() {
    this.dialogRef.close(this.points);
  }
}
