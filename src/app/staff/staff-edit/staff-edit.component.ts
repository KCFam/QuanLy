import { Component, OnInit } from '@angular/core';

import { StaffModel } from '../../staff.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
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
  //staffEditForm: FormGroup;
  submitted = false;
  
  staffModel: StaffModel = {ID:'', Name:'', Phone:'', Credit:0, Note:'', Address:''};
  matcher = new MyErrorStateMatcher();

  constructor( private formBuilder: FormBuilder) { 
  }

  ngOnInit() {
    // this.staffEditForm = this.formBuilder.group({
    //   phone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(11)]],
    //   name: ['', Validators.required],
    //   address: [''],
    //   credit: [''],
    //   note: ['']
    // });

  }

  // convenience getter for easy access to form fields

  onSubmit() {
  }

}
