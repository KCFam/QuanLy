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

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-staff-transaction-dialog',
  templateUrl: 'staff-transaction-dialog.module.html',
  styleUrls: ['staff-transaction-dialog.module.scss'],
})
export class StaffTransactionDialogComponent {

  userData: UserData;

  constructor(
    private dialogRef: MatDialogRef<StaffTransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.userData = data;
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

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

@Component({
  selector: 'app-staff-transaction-table',
  templateUrl: './staff-transaction-table.component.html',
  styleUrls: ['./staff-transaction-table.component.scss']
})
export class StaffTransactionTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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

  openDialog( userData: UserData) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = userData;

    const dialogRef = this.dialog.open(StaffTransactionDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }

}

function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}