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

import { StaffTransactionService, StaffTransactionModel, StaffTransactionFBModel } from '../../staff-transaction.service';
import { StaffTransactionDialogComponent } from '../staff-transaction-dialog/staff-transaction-dialog.component';
import { StaffModel } from '../../staff.service';

@Component({
  selector: 'app-staff-transaction-view',
  templateUrl: './staff-transaction-view.component.html',
  styleUrls: ['./staff-transaction-view.component.scss']
})
export class StaffTransactionViewComponent implements OnInit {
  displayedColumns: string[] = ['Ten Tho', 'Khuon', 'Loai Toc', 'So Day', 'Tien Cong', 'Tong Tien', 'action'];
  dataSource: MatTableDataSource<StaffTransactionModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private staffTransactionService: StaffTransactionService) {
//     this.staffTransactionService.createStaffTransactionModel({
//       ID: "123",
//       ReceivedDate: new Date(),
// ReturnedDate: new Date(),
// StaffID: "Staffs/bmgJYBMWRl6xeAo3EtTB",
// ReceivedItem: "2D",
// NumberLinesReturned: 33,
// Salary: 33,
// Note: "",
// Total: 234,
// Signature: "",
// LashType: "0.07"
//     });
    // Assign the data to the data source for the table to render
    this.staffTransactionService.getStaffTransactionModels().subscribe( data => {
      this.dataSource = new MatTableDataSource(data.map( a=> {
        return {
          ID: a.payload.doc.id,
          ... a.payload.doc.data(),
          StaffName: ""
        } as StaffTransactionModel
      }));

      this.dataSource.data.map((staffTransactionModel) => {
        console.log("Staff ID:" + staffTransactionModel.StaffID);
          this.staffTransactionService.getStaffTransactionModel(staffTransactionModel.StaffID).then((doc) => {
            if (doc.docs..exists) {
              staffTransactionModel.StaffName = ({
                ID: doc.id,
                ...doc.data()
              } as StaffModel).Name;
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
      });
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