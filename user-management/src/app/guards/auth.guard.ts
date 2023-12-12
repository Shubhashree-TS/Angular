
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


export class authGuard implements CanActivateFn{
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | Url
    return:true;
}}

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
