import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SignaturePadModule } from 'angular2-signaturepad';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructingComponent } from './constructing/constructing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ConstructingComponent,
    DashboardComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignaturePadModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
