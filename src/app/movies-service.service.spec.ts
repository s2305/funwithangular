import { TestBed } from '@angular/core/testing';

import { CommunesServiceService } from './movies-service.service';

describe('CommunesServiceService', () => {
  let service: CommunesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
