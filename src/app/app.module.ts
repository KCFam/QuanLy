// SYSTEM
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

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
import { StaffEditComponent } from './staff/staff-edit/staff-edit.component';
import { StaffTableComponent } from './staff/staff-table/staff-table.component';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ConstructingComponent,
    DashboardComponent,
    StaffTransactionTableComponent,
    StaffTransactionDialogComponent,
    SignaturePadComponent,
    StaffEditComponent,
    StaffTableComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
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
    MatDialogModule,
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
  entryComponents: [StaffTransactionDialogComponent,StaffTransactionTableComponent]
})
export class AppModule { }
