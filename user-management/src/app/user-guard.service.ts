import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    const hasUserInfo = this.userService.getUser().length > 0;

    if (!hasUserInfo) {
      alert('Please fill in all the fields in the Add User page.');
      this.router.navigate(['/adduser']);
    }

    return hasUserInfo;
  }
}
