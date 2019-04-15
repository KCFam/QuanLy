import { Component, OnInit } from '@angular/core';

import { StaffModel, StaffService } from '../../staff.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, switchMap } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material';
import { ActivatedRouteSnapshot, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.scss']
})
export class StaffEditComponent implements OnInit {
  
  staffModel: StaffModel = {ID:null, Name:'', Phone:'', Credit:0, Note:'', Address:''};

  constructor( private staffService: StaffService, private route: ActivatedRoute, 
    private router: Router, private appService:AppService, ) { 
      
  }

  ngOnInit() {
    let ID: string = this.route.snapshot.paramMap.get('ID');
    if( null != ID) {
      this.staffService.getStaffModels().subscribe( data => {
        this.staffModel = data.map(a => {
          return {
            ID: a.payload.doc.id,
            ... a.payload.doc.data()
          } as StaffModel;
        })[1];
      });
      this.appService.title = "Chỉnh sửa thông tin thợ";
    }
    else { this.appService.title = "Thông tin thợ mới"; }
  }

  ngAfterViewInit() {
  }

  onSubmit() {
  }

  validation(): boolean {
    if( this.staffModel.Credit == null )
      this.staffModel.Credit = 0;
    return this.staffModel.Phone.length>=9 
    && this.staffModel.Phone.length<=11 
    && this.staffModel.Name.length>0;
  }

  save() {
    if( this.validation() ) {
      if( this.staffModel.ID != null) {
        this.staffService.updateStaffModel(this.staffModel);
      }
      else {
        this.staffService.createStaffModel(this.staffModel);
      }

      this.router.navigateByUrl('/Dashboard');
    }
  }

  clear() {
    this.staffModel.Name = "";
    this.staffModel.Phone = "";
    this.staffModel.Credit = 0;
    this.staffModel.Note = "";
    this.staffModel.Address = "";
  }

  cancel() {
    this.router.navigateByUrl('/Dashboard');
  }

}
