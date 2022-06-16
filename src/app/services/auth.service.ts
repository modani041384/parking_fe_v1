import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignInModel } from '../models/auth/auth.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    endpoints = {
        signin: `${environment.apiURL}/sign-in`
    };
    constructor(private http: HttpClient) {

    }

    signIn(userName: string, password: string): Observable<SignInModel> {
        return this.http.post<SignInModel>(this.endpoints.signin, {
            userName: userName,
            password: password
        });
    }
}
