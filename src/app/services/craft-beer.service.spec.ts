import { TestBed } from '@angular/core/testing';

import { CraftBeerService } from './craft-beer.service';

describe('CraftBeerService', () => {
  let service: CraftBeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CraftBeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
