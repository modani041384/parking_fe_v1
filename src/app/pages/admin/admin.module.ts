import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CoreModule } from 'src/core/core.module';
import { ParkingManagerModule } from './parking-manager/parking-manager.module';
import { FormsModule } from '@angular/forms';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@NgModule({
    declarations: [
        AdminComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ParkingManagerModule,
        CoreModule.forRoot(),
        FormsModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule
    ]
})
export class AdminModule {

}
