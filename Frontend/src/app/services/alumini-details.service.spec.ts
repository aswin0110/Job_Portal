import { TestBed } from '@angular/core/testing';

import { AluminiDetailsService } from './alumini-details.service';

describe('AluminiDetailsService', () => {
  let service: AluminiDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AluminiDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
