import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { unsaveChangesGuard } from './unsave-changes.guard';

describe('unsaveChangesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unsaveChangesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
