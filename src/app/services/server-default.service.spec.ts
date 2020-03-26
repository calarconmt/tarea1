import { TestBed } from '@angular/core/testing';

import { ServerDefaultService } from './server-default.service';

describe('ServerDefaultService', () => {
  let service: ServerDefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerDefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
