import { TestBed } from '@angular/core/testing';

import { ThirdExerciceServiceService } from './third-exercice-service.service';

describe('ThirdExerciceServiceService', () => {
  let service: ThirdExerciceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdExerciceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
