import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SignaturePadModule } from 'angular2-signaturepad';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructingComponent } from './constructing/constructing.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstructingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignaturePadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
