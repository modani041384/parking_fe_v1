import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CameraManagementRoutingModule } from './camera-management-routing.module';
import { CameraManagementComponent } from './camera-management.component';
import { AntModuleModule } from 'src/app/modules/ant-module/ant-module.module';
import { CoreModule } from 'src/core/core.module';


@NgModule({
    declarations: [
        CameraManagementComponent
    ],
    imports: [
        CommonModule,
        CameraManagementRoutingModule,
        AntModuleModule,
        CoreModule,

    ]
})
export class CameraManagementModule { }
