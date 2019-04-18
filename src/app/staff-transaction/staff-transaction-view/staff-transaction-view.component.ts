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
import { StaffTransactionDialogComponent } from '../staff-transaction-dialog/staff-transaction-dialog.component';

@Component({
  selector: 'app-staff-transaction-view',
  templateUrl: './staff-transaction-view.component.html',
  styleUrls: ['./staff-transaction-view.component.scss']
})
export class StaffTransactionViewComponent implements OnInit {
  displayedColumns: string[] = ['Ten Tho', 'Loai Toc', 'So Day', 'Tien Cong', 'action'];
  dataSource: MatTableDataSource<StaffTransactionModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private staffTransactionService: StaffTransactionService) {
    // Assign the data to the data source for the table to render
    this.staffTransactionService.getStaffTransactionModels().subscribe( data => {
      this.dataSource = new MatTableDataSource(data.map( a=> {
        return {
          ID: a.payload.doc.id,
          ... a.payload.doc.data()
        } as StaffTransactionModel
      }));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    });
  }

  ngOnInit() {
    
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