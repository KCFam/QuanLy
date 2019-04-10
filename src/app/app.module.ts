// SYSTEM
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import {
  MatDialogModule 
} from '@angular/material/dialog';

// 3RD PARTY
import { SignaturePadModule } from 'angular2-signaturepad';

// PROJECT
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructingComponent } from './constructing/constructing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaffTransactionTableComponent, StaffTransactionDialogComponent } from './staff-transaction-table/staff-transaction-table.component';
import { SignaturePadComponent } from './signature-pad/signature-pad.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { StaffEditComponent } from './staff/staff-edit/staff-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstructingComponent,
    DashboardComponent,
    StaffTransactionTableComponent,
    StaffTransactionDialogComponent,
    SignaturePadComponent,
    StaffFormComponent,
    StaffEditComponent
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
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StaffTransactionDialogComponent,StaffTransactionTableComponent]
})
export class AppModule { }
