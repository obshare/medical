import { TestBed, inject } from '@angular/core/testing';

import { MedicineshopService } from './medicineshop.service';

describe('MedicineshopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicineshopService]
    });
  });

  it('should be created', inject([MedicineshopService], (service: MedicineshopService) => {
    expect(service).toBeTruthy();
  }));
});
