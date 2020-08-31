import { TestBed, inject } from '@angular/core/testing';

import { DepartmentCreateService } from './department-create.service';

describe('DepartmentCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartmentCreateService]
    });
  });

  it('should be created', inject([DepartmentCreateService], (service: DepartmentCreateService) => {
    expect(service).toBeTruthy();
  }));
});
