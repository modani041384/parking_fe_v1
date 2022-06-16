import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
@Injectable({
    providedIn: 'root'
})
export class JWTService {

    jwtToken: string = "";
    decodedToken: { [key: string]: string } = {};

    constructor() {
        if (localStorage.getItem('jwtoken')) {
            this.jwtToken = localStorage.getItem('jwtoken') || "";
        }
    }

    setToken(token: string) {
        if (token) {
            this.jwtToken = token;
            localStorage.setItem('jwtoken', token);
            localStorage.setItem('roles', "admin");
        }
    }

    decodeToken() {
        if (this.jwtToken) {
            this.decodedToken = jwt_decode(this.jwtToken);
        }
    }

    getDecodeToken() {
        return jwt_decode(this.jwtToken);
    }

    getToken() {
        return this.jwtToken;
    }

    getUser() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken["sub"] : null;
    }

    getEmailId() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken["email"] : null;
    }

    getExpiryTime() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken["exp"] : "";
    }

    isTokenExpired(): boolean {
        const expiryTime: number = +this.getExpiryTime();
        if (expiryTime) {
            return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
        } else {
            return false;
        }
    }
}
