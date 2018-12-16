import { TestBed, inject } from '@angular/core/testing';

import { OrderrouteguardService } from './orderrouteguard.service';

describe('OrderrouteguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderrouteguardService]
    });
  });

  it('should be created', inject([OrderrouteguardService], (service: OrderrouteguardService) => {
    expect(service).toBeTruthy();
  }));
});
