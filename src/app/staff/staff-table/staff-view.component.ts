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
  selector: 'app-staff-view',
  templateUrl: './staff-view.component.html',
  styleUrls: ['./staff-view.component.scss']
})
export class StaffViewComponent implements OnInit {
  dataSource: StaffModel[];
  filteredDataSource: StaffModel[];

  constructor(private appService:AppService, private staffService: StaffService) { 
    appService.title = "Danh sách thợ";
    
  }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    this.staffService.getStaffModels().subscribe(data => {
      this.dataSource = data;
      this.filteredDataSource = data;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();

    this.filteredDataSource = this.dataSource.filter( staffModel => {
      return staffModel.Name.indexOf(filterValue) != -1
        || staffModel.Phone.indexOf(filterValue) != -1 
        || staffModel.Address.indexOf( filterValue) != -1
    });
  }

  delete( staffModel: StaffModel) {
    this.staffService.deleteStaffModel(staffModel);
  }
}