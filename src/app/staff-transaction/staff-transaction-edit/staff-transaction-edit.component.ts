import { Component, OnInit } from '@angular/core';

import { StaffTransactionFBModel, StaffTransactionService } from '../../staff-transaction.service';

@Component({
  selector: 'app-staff-transaction-edit',
  templateUrl: './staff-transaction-edit.component.html',
  styleUrls: ['./staff-transaction-edit.component.scss']
})
export class StaffTransactionEditComponent implements OnInit {
  staffTransactionModel: StaffTransactionFBModel = {
    ID: '',
    ReceivedDate: new Date(),
    ReturnedDate: new Date(),
    StaffID: '',
    ReceivedItem: '',
    NumberLinesReturned: 0,
    Salary: 0,
    Note: ' ',
    Total: 0,
    Signature: '',
    LashType: ''
  }

  constructor( private staffTransactionService: StaffTransactionService) { 

  }

  ngOnInit() {
  }

  onSubmit() {}

  clear() {
    this.staffTransactionModel.ID = "";
    this.staffTransactionModel.ReceivedDate = new Date();
    this.staffTransactionModel.ReturnedDate = new Date();
    this.staffTransactionModel.StaffID = "";
    this.staffTransactionModel.ReceivedItem = "";
    this.staffTransactionModel.NumberLinesReturned = 0;
    this.staffTransactionModel.Salary = 0;
    this.staffTransactionModel.Note = " ";
    this.staffTransactionModel.Total = 0;
    this.staffTransactionModel.Signature = "";
    this.staffTransactionModel.LashType = "";
  }

}
