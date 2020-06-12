import { Injectable, NgModule } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class GuestGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      return true;
    } else {
      if (route.routeConfig.path === 'login') {
        this.router.navigateByUrl('/application');
        return true;
      }
    }
    return false;
  }
}
