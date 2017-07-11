import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AboutGuard implements CanActivate {
 constructor() { }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  return confirm('Are you really decide to pass from this page?');
 }
}
