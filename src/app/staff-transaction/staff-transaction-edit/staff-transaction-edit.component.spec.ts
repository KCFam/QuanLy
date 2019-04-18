import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTransactionEditComponent } from './staff-transaction-edit.component';

describe('StaffTransactionEditComponent', () => {
  let component: StaffTransactionEditComponent;
  let fixture: ComponentFixture<StaffTransactionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTransactionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTransactionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
