import { TestBed } from '@angular/core/testing';

import { MedicineDistributerService } from './medicine-distributer.service';

describe('MedicineDistributerService', () => {
  let service: MedicineDistributerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineDistributerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
