import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';
import { AuthService } from 'src/app/services/auth.service';
import { JWTService } from 'src/app/services/auth/jwt.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    validateForm!: FormGroup;
    constructor(private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private activeRoute: ActivatedRoute,
        private tokenService: JWTService) {
    }
    ngOnInit(): void {
        this.validateForm = this.fb.group({
            userName: ['admin@gmail.com.vn', [Validators.required]],
            password: ["admin123", [Validators.required]],
            remember: [true]
        });
    }
    submitForm(): void {
        this.authService.signIn(this.validateForm.value.userName, this.validateForm.value.password)
            .subscribe(res => {
                this.tokenService.setToken(res.accessToken);
                localStorage.setItem('roles', JSON.stringify(res.roles));
                const redirectURL = this.activeRoute.snapshot.queryParams['returnUrl'] || '/';
                this.router.navigateByUrl(redirectURL);
            });

    }

}
