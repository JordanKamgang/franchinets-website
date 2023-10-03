import { TestBed } from '@angular/core/testing';

import { FranchinettranslationService } from './franchinettranslation.service';

describe('FranchinettranslationService', () => {
  let service: FranchinettranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FranchinettranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
