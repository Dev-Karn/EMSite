import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Role } from '../models/role';

export const orgainzerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('Guarding');
  console.log(authService.isAuth);

  if (authService.isAuth && authService.authUser.Role === Role.ORAGANIZER)
    return true;

  return router.navigate(['/login']);
};
