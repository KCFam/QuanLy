import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { StaffService, StaffModel } from '../../staff.service';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MAT_DIALOG_DATA
} from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-staff-table',
  templateUrl: './staff-table.component.html',
  styleUrls: ['./staff-table.component.scss']
})
export class StaffTableComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Phone', 'Address', 'Balance', 'Note'];
  dataSource = new MatTableDataSource<StaffModel>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private appService:AppService, private staffService: StaffService) { 
    appService.title = "Danh sách thợ";
    //this.dataSource = new MatTableDataSource( staffService.getStaffModels() );
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  ngAfterViewInit() {
    this.staffService.getStaffModels().subscribe(data => {
      this.dataSource.data = data;
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
