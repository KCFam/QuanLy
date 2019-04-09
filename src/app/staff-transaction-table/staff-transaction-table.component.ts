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

import { StaffTransactionService, StaffTransactionModel } from '../staff-transaction.service';

@Component({
  selector: 'app-staff-transaction-table',
  templateUrl: './staff-transaction-table.component.html',
  styleUrls: ['./staff-transaction-table.component.scss']
})
export class StaffTransactionTableComponent implements OnInit {
  displayedColumns: string[] = ['Ten Tho', 'Khuon', 'Loai Toc', 'So Day', 'Tien Cong', 'Tong Tien', 'action'];
  dataSource: MatTableDataSource<StaffTransactionModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private staffTransactionService: StaffTransactionService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource( staffTransactionService.getStaffTransactions() );
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog( staffTransaction : StaffTransactionModel) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = staffTransaction;

    const dialogRef = this.dialog.open(StaffTransactionDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }

}

@Component({
  selector: 'app-staff-transaction-dialog',
  templateUrl: 'staff-transaction-dialog.module.html',
  styleUrls: ['staff-transaction-dialog.module.scss'],
})
export class StaffTransactionDialogComponent {

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