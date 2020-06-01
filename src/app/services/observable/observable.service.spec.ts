import { TestBed, inject } from '@angular/core/testing';

import { ObservableService } from './observable.service';

describe('ObservableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservableService]
    });
  });

  it('should be created', inject([ObservableService], (service: ObservableService) => {
    expect(service).toBeTruthy();
  }));
});
