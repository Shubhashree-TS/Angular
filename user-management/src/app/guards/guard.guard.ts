import { CanActivateFn } from '@angular/router';
import { UserService } from '../user.service';
import { inject } from '@angular/core';


export const guardGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService) ;
  let isuseradded = userService.isUserAdded;
  if(userService.isAnyOneAdded()){
    return true;
  }else {
    alert('Add a user before deleting any')
    return false;
  }
};
