import { TestBed } from '@angular/core/testing';

import { RestaurntApiService } from './restaurnt-api.service';

describe('RestaurntApiService', () => {
  let service: RestaurntApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurntApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
