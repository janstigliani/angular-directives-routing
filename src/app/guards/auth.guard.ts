import { CanActivateFn, createUrlTreeFromSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authServ = inject(AuthService);
  console.log("we're in, onee-sama!")
  const router = inject(Router)
  if (authServ.isAuth){
    return true;
  } else { 
    console.log("You shall not pas")
    // return createUrlTreeFromSnapshot(route, ['/login']);
    return router.createUrlTree(['', '/login'])
  }
  
};
