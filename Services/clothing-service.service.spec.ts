import { TestBed } from '@angular/core/testing';

import { ClothingServiceService } from './clothing-service.service';

describe('ClothingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClothingServiceService = TestBed.get(ClothingServiceService);
    expect(service).toBeTruthy();
  });
});
