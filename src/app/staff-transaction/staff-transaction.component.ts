import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

import { StaffTransactionModel } from '../staff-transaction.service';

@Component({
  selector: 'app-staff-transaction',
  templateUrl: './staff-transaction.component.html',
  styleUrls: ['./staff-transaction.component.scss']
})
export class StaffTransactionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
