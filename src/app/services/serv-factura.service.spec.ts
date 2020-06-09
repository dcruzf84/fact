import { TestBed } from '@angular/core/testing';

import { ServFacturaService } from './serv-factura.service';

describe('ServFacturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServFacturaService = TestBed.get(ServFacturaService);
    expect(service).toBeTruthy();
  });
});
