import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ParkingManagerComponent } from './parking-manager/parking-manager.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'parking-manager',
                loadChildren: () => import('./parking-manager/parking-manager.module').then(m => m.ParkingManagerModule)
            },
            {
                path: 'camera-manager',
                loadChildren: () => import('./camera-management/camera-management.module').then(m => m.CameraManagementModule)
            },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
