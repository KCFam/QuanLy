import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor() { }
}

export interface Staff {
  ID: string;
  Address: string;
  Balance: Number;
  Name: string;
  PhoneNumber: Number;
}