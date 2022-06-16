import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingDetailComponent } from './parking-detail/parking-detail.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { ParkingManagerComponent } from './parking-manager.component';

const routes: Routes = [
    {
        path: '', component: ParkingManagerComponent,
        children: [
            { path: 'parking-list', component: ParkingListComponent },
            { path: 'parking', component: ParkingDetailComponent },
        ]
    },];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParkingManagerRoutingModule { }
