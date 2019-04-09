// SYSTEM
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ANGULAR MATERIAL 2
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatInputModule 
} from '@angular/material';

// 3RD PARTY
import { SignaturePadModule } from 'angular2-signaturepad';

// PROJECT
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructingComponent } from './constructing/constructing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaffTransactionTableComponent } from './staff-transaction-table/staff-transaction-table.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstructingComponent,
    DashboardComponent,
    StaffTransactionTableComponent,
    DialogComponent
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
    MatListModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
