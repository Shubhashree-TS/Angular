import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { authGuard } from './auth.guard';
import { Injectable } from '@angular/core';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
