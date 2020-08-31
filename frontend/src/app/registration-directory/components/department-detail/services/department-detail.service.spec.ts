import { TestBed, inject } from '@angular/core/testing';

import { DepartmentDetailService } from './department-detail.service';

describe('DepartmentDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartmentDetailService]
    });
  });

  it('should be created', inject([DepartmentDetailService], (service: DepartmentDetailService) => {
    expect(service).toBeTruthy();
  }));
});
