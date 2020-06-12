import { Injectable, NgModule } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      if (route.routeConfig.path === 'login' && route.queryParams.redirectTo) {
        this.router.navigateByUrl(route.queryParams.redirectTo);
      }

      return true;
    } else {
      this.router.navigateByUrl('');
      return false;
    }
  }
}
