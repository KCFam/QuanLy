import { Component, OnInit } from '@angular/core';

import { StaffModel, StaffService } from '../../staff.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.scss']
})
export class StaffEditComponent implements OnInit {
  
  staffModel: StaffModel = {ID:'', Name:'', Phone:'', Credit:0, Note:'', Address:''};

  constructor( private staffService: StaffService) { 
  }

  ngOnInit() {
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
      this.staffService.addStaffModel(this.staffModel);

      console.log("Staff Edit Saved!");
    }
    console.log(this.staffModel);
  }

  clear() {
    this.staffModel.Name = "";
    this.staffModel.Phone = "";
    this.staffModel.Credit = 0;
    this.staffModel.Note = "";
    this.staffModel.Address = "";
  }

  cancel() {
    console.log("Staff Edit Canceled");
  }

}
