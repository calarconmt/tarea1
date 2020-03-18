import { TestBed } from '@angular/core/testing';

import { MachstatusserviceService } from './machstatusservice.service';

describe('MachstatusserviceService', () => {
  let service: MachstatusserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachstatusserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
