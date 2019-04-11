import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTransactionTableComponent } from './staff-transaction-table.component';

describe('StaffTransactionTableComponent', () => {
  let component: StaffTransactionTableComponent;
  let fixture: ComponentFixture<StaffTransactionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTransactionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTransactionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
