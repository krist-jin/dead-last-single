import { Injectable } from '@angular/core';
import { SuiteType, voteCardColorTable, showdownCardColorTable, voteCardAvatarTable, showdownCardAvatarTable } from './app.constants';
import * as _ from 'lodash';
import { NgForage } from 'ngforage';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private readonly forage: NgForage
  ) { }

  getColorByNumber(n: number, cardType: SuiteType) {
    if (cardType === SuiteType.vote) {
      return n ? voteCardColorTable[n] : 'unset';
    }
    if (cardType === SuiteType.showdown) {
      return n ? showdownCardColorTable[n] : 'unset';
    }
  }

  getAvatar(n: number, cardType: SuiteType) {
    if (cardType === SuiteType.vote) {
      return n ? voteCardAvatarTable[n] : 'unset';
    }
    if (cardType === SuiteType.showdown) {
      return n ? showdownCardAvatarTable[n] : 'unset';
    }
  }

  playKillAudio() {
    const audio = new Audio();
    audio.src = `assets/audio/kill${_.random(1, 4)}.mp3`;
    audio.load();
    audio.play();
  }

  getItemFromForage(key: string): Promise<any> {
    return this.forage.getItem<any>(key);
  }

  getCachedSettings(): Promise<any[]> {
    const playerCountPromise = this.getItemFromForage('playerCount');
    const myNumberPromise = this.getItemFromForage('myNumber');
    const goldPromise = this.getItemFromForage('gold');
    return Promise.all([playerCountPromise, myNumberPromise, goldPromise]);
  }

  setItemToForage(key: string, value: any): Promise<any> {
    return this.forage.setItem(key, value).then(() => this.forage.getItem(key));
  }

  saveSettings(playerCount: number, myNumber: number, gold: number): Promise<any[]> {
    const playerCountPromise = this.setItemToForage('playerCount', playerCount);
    const myNumberPromise = this.setItemToForage('myNumber', myNumber);
    const goldPromise = this.setItemToForage('gold', gold);
    return Promise.all([playerCountPromise, myNumberPromise, goldPromise]);
  }
}
