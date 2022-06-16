import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraManagementComponent } from './camera-management.component';

const routes: Routes = [{ path: '', component: CameraManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CameraManagementRoutingModule { }
