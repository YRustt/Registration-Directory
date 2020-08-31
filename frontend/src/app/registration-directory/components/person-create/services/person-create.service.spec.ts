import { TestBed, inject } from '@angular/core/testing';

import { PersonCreateService } from './person-create.service';

describe('PersonCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonCreateService]
    });
  });

  it('should be created', inject([PersonCreateService], (service: PersonCreateService) => {
    expect(service).toBeTruthy();
  }));
});
