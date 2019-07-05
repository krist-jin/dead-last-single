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
  MatOptionModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardSuiteComponent } from './card-suite/card-suite.component';
import { CardComponent } from './card/card.component';
import { AppService } from './app.service';
import { GetGoldDialogComponent } from './dialogs/get-gold-dialog/get-gold-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardSuiteComponent,
    CardComponent,
    GetGoldDialogComponent
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
    MatOptionModule
  ],
  entryComponents: [
    GetGoldDialogComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
