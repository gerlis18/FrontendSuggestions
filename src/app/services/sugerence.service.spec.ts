import { TestBed, inject } from '@angular/core/testing';

import { SugerenceService } from './sugerence.service';

describe('SugerenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SugerenceService]
    });
  });

  it('should ...', inject([SugerenceService], (service: SugerenceService) => {
    expect(service).toBeTruthy();
  }));
});
