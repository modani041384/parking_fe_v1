import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingManagerRoutingModule } from "./parking-manager-routing.module";
import { CoreModule } from 'src/core/core.module';
import { ParkingManagerComponent } from './parking-manager.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { ParkingDetailComponent } from './parking-detail/parking-detail.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { AddParkingComponent } from './add-parking/add-parking.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ParkingLaneDetailComponent } from './parking-lane-detail/parking-lane-detail.component';
import { SlottypeConfigComponent } from './slottype-config/slottype-config.component';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
@NgModule({
    declarations: [
        ParkingManagerComponent,
        ParkingListComponent,
        ParkingDetailComponent,
        AddParkingComponent,
        ParkingLaneDetailComponent,
        SlottypeConfigComponent
    ],
    imports: [
        CommonModule,
        ParkingManagerRoutingModule,
        RouterModule,
        CoreModule.forRoot(),
        FormsModule,
        NzTableModule,
        NzDividerModule,
        NzInputModule,
        NzInputNumberModule,
        NzIconModule,
        NzButtonModule,
        NzDropDownModule,
        NzSelectModule,
        NzFormModule,
        ReactiveFormsModule,
        NzModalModule,
        NzCollapseModule
    ]
})
export class ParkingManagerModule { }