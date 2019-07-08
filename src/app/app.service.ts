import { Injectable } from '@angular/core';
import { SuiteType, voteCardColorTable, showdownCardColorTable, voteCardAvatarTable, showdownCardAvatarTable } from './app.constants';
import * as _ from 'lodash';

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
    audio.src = `/assets/audio/kill${_.random(1, 4)}.mp3`;
    audio.load();
    audio.play();
  }
}
