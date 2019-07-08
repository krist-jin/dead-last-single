import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule,
  MatOptionModule,
  MatInputModule,
  MatExpansionModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardSuiteComponent } from './card-suite/card-suite.component';
import { CardComponent } from './card/card.component';
import { AppService } from './app.service';
import { GetGoldDialogComponent } from './dialogs/get-gold-dialog/get-gold-dialog.component';
import { FormsModule } from '@angular/forms';
import { SettingsDialogComponent } from './dialogs/settings-dialog/settings-dialog.component';
import { RulesComponent } from './dialogs/rules/rules.component';
import { AboutComponent } from './dialogs/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CardSuiteComponent,
    CardComponent,
    GetGoldDialogComponent,
    SettingsDialogComponent,
    RulesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatExpansionModule
  ],
  entryComponents: [
    GetGoldDialogComponent,
    SettingsDialogComponent,
    RulesComponent,
    AboutComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
