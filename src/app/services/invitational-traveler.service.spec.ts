import { TestBed, inject } from '@angular/core/testing';

import { InvitationalTravlerService } from './invitational-traveler.service';

describe('InvitationalTravlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvitationalTravlerService]
    });
  });

  it('should be created', inject([InvitationalTravlerService], (service: InvitationalTravlerService) => {
    expect(service).toBeTruthy();
  }));
});
