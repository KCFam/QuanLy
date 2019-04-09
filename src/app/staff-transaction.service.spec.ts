import { TestBed } from '@angular/core/testing';

import { StaffTransactionService } from './staff-transaction.service';

describe('StaffTransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaffTransactionService = TestBed.get(StaffTransactionService);
    expect(service).toBeTruthy();
  });
});
