import { TestBed } from '@angular/core/testing';

import { InsertcardService } from './insertcard.service';

describe('InsertcardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertcardService = TestBed.get(InsertcardService);
    expect(service).toBeTruthy();
  });
});
