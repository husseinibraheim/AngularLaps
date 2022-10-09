import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuGuard implements CanActivate {
  constructor(private authService: UserAuthService, private routes: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isUserLogged) {
      return true;

    } else {
      alert("please Login");
      this.routes.navigate(["Home"])
      return false
    }
  }

}
