import { Component, OnInit } from '@angular/core';

import { StaffModel } from '../../staff.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.scss']
})
export class StaffEditComponent implements OnInit {
  formPhoneControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]{9,11}$')
  ]);
  formRequiredControl = new FormControl('', [
    Validators.required
  ]);
  staffModel: StaffModel = {ID:'', Name:'', Phone:'', Credit:0, Note:'', Address:''};
  matcher = new MyErrorStateMatcher();

  constructor() { 
  }

  ngOnInit() {
  }

  save() {
    console.log(this.staffModel);
  }

}
