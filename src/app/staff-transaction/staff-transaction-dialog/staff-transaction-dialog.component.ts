import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MAT_DIALOG_DATA
} from '@angular/material';
import {
  MatDialog,
  MatDialogRef,
  MatDialogConfig
} from '@angular/material/dialog';

import { StaffTransactionService, StaffTransactionModel } from '../../staff-transaction.service';

@Component({
    selector: 'app-staff-transaction-dialog',
    templateUrl: 'staff-transaction-dialog.module.html',
    styleUrls: ['staff-transaction-dialog.module.scss'],
  })
  export class StaffTransactionDialogComponent {
    dialogTitle : string = "Title";
    staffTransaction: StaffTransactionModel;
  
    constructor(
      private dialogRef: MatDialogRef<StaffTransactionDialogComponent>,
      @Inject(MAT_DIALOG_DATA) data) {
  
      this.staffTransaction = data;
    }
  
    ngOnInit() {
    }
  
    save() {
      this.dialogRef.close("fdafA");
    }
  
    close() {
      this.dialogRef.close();
    }
  }