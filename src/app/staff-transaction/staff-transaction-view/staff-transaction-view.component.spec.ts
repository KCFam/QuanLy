import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTransactionViewComponent } from './staff-transaction-view.component';

describe('StaffTransactionTableComponent', () => {
  let component: StaffTransactionViewComponent;
  let fixture: ComponentFixture<StaffTransactionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTransactionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTransactionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
