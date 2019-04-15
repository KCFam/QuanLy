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
    this.staffService.getStaffModels().subscribe( data => {
      this.dataSource = data.map(a => {
        return {
          ID: a.payload.doc.id,
          ... a.payload.doc.data()
        } as StaffModel;
      });
      this.applyFilter("");
    });
  }
  
  ngAfterViewInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();

    this.filteredDataSource = this.dataSource.filter( staffModel => {
      return staffModel.Name.toLowerCase().indexOf(filterValue) != -1
        || staffModel.Phone.toLowerCase().indexOf(filterValue) != -1 
        || staffModel.Address.toLowerCase().indexOf( filterValue) != -1
    });
  }

  delete( staffModel: StaffModel) {
    this.staffService.deleteStaffModel(staffModel);
  }
}