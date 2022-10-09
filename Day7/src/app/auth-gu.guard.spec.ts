import { TestBed } from '@angular/core/testing';

import { AuthGuGuard } from './auth-gu.guard';

describe('AuthGuGuard', () => {
  let guard: AuthGuGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
