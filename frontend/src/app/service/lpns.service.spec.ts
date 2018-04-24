import { TestBed, inject } from '@angular/core/testing';

import { LpnsService } from './lpns.service';

describe('LpnsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LpnsService]
    });
  });

  it('should be created', inject([LpnsService], (service: LpnsService) => {
    expect(service).toBeTruthy();
  }));
});
