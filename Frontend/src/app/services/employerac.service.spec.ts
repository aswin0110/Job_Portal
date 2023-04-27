import { TestBed } from '@angular/core/testing';

import { EmployeracService } from './employerac.service';

describe('EmployeracService', () => {
  let service: EmployeracService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeracService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
