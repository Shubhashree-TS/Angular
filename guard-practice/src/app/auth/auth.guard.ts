import { Injectable, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';


// @Injectable ({
//   providedIn:'root'
// })
 // 
  // 
  // if(isLoggedIn){
  //   return true;
  // }else{
  //   alert('enter the credentials');
  //   return false;
  // }

  
export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService);
  let isLoggedIn = service.isAuthenticated();
  if(isLoggedIn){
   
    return true;
  }else{
    alert('enter the credentials')
    return false;
  }
  
  
};

// export class AuthGuard implements CanActivate{
//   constructor(private authService:AuthService, private router:Router){
//     canActivate (
//       next:ActivatedRouteSnapshot,
//       state:RouterStateSnapshot):boolean {
//         console.log('CanActivate called');
//       }
//       let isLoggedIn = this.authService.isAuthenticated();
//       if(isLoggedIn){
//         return true;
//       }else {
//         this.router.navigate(['/contact']);
//       }
//   }
// }



