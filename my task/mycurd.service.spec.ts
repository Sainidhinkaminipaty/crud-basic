import { TestBed } from '@angular/core/testing';

import { MycurdService } from './mycurd.service';

describe('MycurdService', () => {
  let service: MycurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
