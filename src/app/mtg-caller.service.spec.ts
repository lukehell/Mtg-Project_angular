import { TestBed } from '@angular/core/testing';

import { MtgCallerService } from './mtg-caller.service';

describe('MtgCallerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtgCallerService = TestBed.get(MtgCallerService);
    expect(service).toBeTruthy();
  });
});
