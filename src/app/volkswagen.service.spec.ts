import { TestBed } from '@angular/core/testing';

import { VolkswagenService } from './volkswagen.service';

describe('VolkswagenService', () => {
  let service: VolkswagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolkswagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
