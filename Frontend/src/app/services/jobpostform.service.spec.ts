import { TestBed } from '@angular/core/testing';

import { JobpostformService } from './jobpostform.service';

describe('JobpostformService', () => {
  let service: JobpostformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobpostformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
