import { TestBed } from '@angular/core/testing';

import { FunboxService } from './funbox.service';

describe('FunboxService', () => {
  let service: FunboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
