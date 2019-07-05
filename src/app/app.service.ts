import { Injectable } from '@angular/core';
import { SuiteType, normalCardColorTable, showdownCardColorTable } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getColorByNumber(n: number, cardType: SuiteType) {
    if (cardType === SuiteType.normal) {
      return n ? normalCardColorTable[n] : 'unset';
    }
    if (cardType === SuiteType.showdown) {
      return n ? showdownCardColorTable[n] : 'unset';
    }
  }
}
