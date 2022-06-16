import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { JWTService } from '../services/auth/jwt.service';

@Injectable({
    providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {

    constructor(private jwtService: JWTService, private router: Router) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (environment.bypass) {
            return true;
        }
        if (this.jwtService.getUser()) {
            if (this.jwtService.isTokenExpired()) {
                this.redirectToSignin(state.url);
                return false;
            } else {
                return true;
            }
        }
        this.redirectToSignin(state.url);
        return false;
    }

    redirectToSignin(redirectURL: string) {
        this.router.navigate(['/login'], { queryParams: { returnUrl: redirectURL } });
    }

}
