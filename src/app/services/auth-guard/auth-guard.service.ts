import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../authentication/authentication.service";

@Injectable({
    providedIn : 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(!this.authenticationService.isAuthenticated()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}