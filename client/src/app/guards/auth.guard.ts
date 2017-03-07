import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

//The auth guard is used to prevent unauthenticated users from accessing restricted routes

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {

            return true;
        }

        console.log("wrong");
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}