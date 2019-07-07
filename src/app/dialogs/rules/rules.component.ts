import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Language } from 'src/app/app.constants';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  selectedLanguage: Language = Language.Chinese;
  Language = Language;

  constructor(
    public dialogRef: MatDialogRef<RulesComponent>
  ) { }

  ngOnInit() {
  }

  onClickClose() {
    this.dialogRef.close();
  }
}
