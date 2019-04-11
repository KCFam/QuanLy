import { Injectable } from '@angular/core';

export interface StaffTransactionModel {
  receivedDate: Date;
  returnedDate: Date;
  staffID: string;
  receivedItem: string;
  numberLinesReturned: Number;
  salary: Number;
  note: string;
  total: Number;
  signature: any;
  lashType: string;
}

@Injectable({
  providedIn: 'root'
})
export class StaffTransactionService {
  staffTransactions = ELEMENT_DATA;

  constructor() { }

  public getStaffTransactions() : StaffTransactionModel[] {
    return this.staffTransactions;
  }

}

// CREATE TEST DATA
const ELEMENT_DATA: StaffTransactionModel[] = [
  { receivedDate: new Date(), returnedDate: null, staffID: "1", receivedItem: "item1", numberLinesReturned: 20, salary: 30.4, note: "", total: 20, signature: "dafda", lashType: "Type1"},
  { receivedDate: new Date(), returnedDate: null, staffID: "5", receivedItem: "item1", numberLinesReturned: 20, salary: 30.4, note: "", total: 20, signature: "dafda", lashType: "Type1"},
  { receivedDate: new Date(), returnedDate: null, staffID: "7", receivedItem: "item1", numberLinesReturned: 20, salary: 30.4, note: "", total: 20, signature: "dafda", lashType: "Type1"},
  { receivedDate: new Date(), returnedDate: null, staffID: "12", receivedItem: "item1", numberLinesReturned: 20, salary: 30.4, note: "", total: 20, signature: "dafda", lashType: "Type1"},
  { receivedDate: new Date(), returnedDate: null, staffID: "18", receivedItem: "item1", numberLinesReturned: 20, salary: 30.4, note: "", total: 20, signature: "dafda", lashType: "Type1"}
];