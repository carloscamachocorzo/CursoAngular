import { TestBed } from '@angular/core/testing';

import { UrldataService } from './urldata.service';

describe('UrldataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrldataService = TestBed.get(UrldataService);
    expect(service).toBeTruthy();
  });
});
