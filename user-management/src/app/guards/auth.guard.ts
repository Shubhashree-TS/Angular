
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanActivateFn } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

 class authGuard  {
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):boolean{
      return true;
    }
    
}

export  const authGaurdClass: CanActivateFn = (route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean =>{
  return inject(authGuard).canActivate(route,state);
}

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
