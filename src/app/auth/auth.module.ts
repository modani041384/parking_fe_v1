import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NzFormModule,
        NzInputModule,
        ReactiveFormsModule,
        NzCardModule,
        NzButtonModule
    ],
    declarations: [
        LoginComponent, // <---
    ],
})

export class AuthModule { }
