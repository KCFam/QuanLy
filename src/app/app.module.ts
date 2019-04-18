// SYSTEM
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  MatInputModule,
  MatAutocompleteModule,
  MatMenuModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatCardModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule
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
import { StaffTransactionViewComponent } from './staff-transaction/staff-transaction-view/staff-transaction-view.component';
import { StaffTransactionDialogComponent } from './staff-transaction/staff-transaction-dialog/staff-transaction-dialog.component';
import { SignaturePadComponent } from './signature-pad/signature-pad.component';
import { StaffEditComponent } from './staff/staff-edit/staff-edit.component';
import { StaffViewComponent } from './staff/staff-view/staff-view.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { StaffTransactionEditComponent } from './staff-transaction/staff-transaction-edit/staff-transaction-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstructingComponent,
    DashboardComponent,
    StaffTransactionViewComponent,
    StaffTransactionDialogComponent,
    SignaturePadComponent,
    StaffEditComponent,
    StaffViewComponent,
    StaffTransactionEditComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
    AngularFireDatabaseModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    AngularFirestore,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [StaffTransactionDialogComponent,StaffTransactionViewComponent]
})
export class AppModule { }
