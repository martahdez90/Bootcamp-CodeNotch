import { TestBed } from '@angular/core/testing';

import { ServiceDiscoService } from './service-disco.service';

describe('ServiceDiscoService', () => {
  let service: ServiceDiscoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDiscoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
