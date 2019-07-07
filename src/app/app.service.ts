import { Injectable } from '@angular/core';
import { SuiteType, voteCardColorTable, showdownCardColorTable } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getColorByNumber(n: number, cardType: SuiteType) {
    if (cardType === SuiteType.vote) {
      return n ? voteCardColorTable[n] : 'unset';
    }
    if (cardType === SuiteType.showdown) {
      return n ? showdownCardColorTable[n] : 'unset';
    }
  }
}
