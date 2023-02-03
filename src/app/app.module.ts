import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localIt from '@angular/common/locales/it';
registerLocaleData(localIt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UcfirstPipe } from './ucfirst.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UcfirstPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
