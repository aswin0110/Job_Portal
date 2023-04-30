import { TestBed } from '@angular/core/testing';

import { ManageacemployeeService } from './manageacemployee.service';

describe('ManageacemployeeService', () => {
  let service: ManageacemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageacemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
