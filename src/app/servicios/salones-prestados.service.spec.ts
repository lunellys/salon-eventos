import { TestBed } from '@angular/core/testing';

import { SalonesPrestadosService } from './salones-prestados.service';

describe('SalonesPrestadosService', () => {
  let service: SalonesPrestadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalonesPrestadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
