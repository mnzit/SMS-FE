import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log("Entering authentication guard")
    let token = sessionStorage.getItem("TOKEN");

    if (token) {
      console.log("token found")
      return true;
    }
    console.log("redirecting to login page")
    this.router.navigate(["/login"])
    return false;
  }

}
