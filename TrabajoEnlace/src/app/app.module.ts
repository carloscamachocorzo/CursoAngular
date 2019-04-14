import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UrldataService } from './urldata.service';
import { PipeUrlPipe } from './pipe-url.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule,MatGridListModule} from '@angular/Material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { UrlInputComponent } from './url-input/url-input.component';
import { UrlListComponent } from './url-list/url-list.component';

@NgModule(
  {
    declarations: [
      AppComponent,
      PipeUrlPipe,
      UrlInputComponent,
      UrlListComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      BrowserModule,
      BrowserAnimationsModule,
      MatSidenavModule,
      MatGridListModule,
      MatToolbarModule,
      MatCardModule      
    ],
    providers: [UrldataService],
    bootstrap: [AppComponent]
  })
export class AppModule { }
