import { TestBed } from '@angular/core/testing';

import { AddserviciosService } from './addservicios.service';

describe('AddserviciosService', () => {
  let service: AddserviciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddserviciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
