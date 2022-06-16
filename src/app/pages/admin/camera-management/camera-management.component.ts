import { Component, OnInit } from '@angular/core';
import { CameraSearchModel, CameraViewModel } from 'src/app/models/camera/camera.model';
import { DeviceStatus } from 'src/app/models/devices/device.model';
import { PagingSearchModel } from 'src/app/models/common/search.model';
import { CameraService } from 'src/app/services/admin/camera.service';
import { ManagementService } from 'src/app/services/admin/management.service';
import { NzTagComponent } from 'ng-zorro-antd/tag';

@Component({
    selector: 'app-camera-management',
    templateUrl: './camera-management.component.html',
    styleUrls: ['./camera-management.component.scss']
})
export class CameraManagementComponent implements OnInit {
    cameraList: CameraViewModel[] = [];
    cameraSearchModel: PagingSearchModel<CameraSearchModel> = {
        page: 1,
        size: 10,
        filter: {
            q: '',
            parkingId: '',
            status: []
        }
    }
    deviceStatus: DeviceStatus[] = [];
    constructor(private cameraService: CameraService,
        private managementService: ManagementService) {
        this.search();
    }

    ngOnInit(): void {
        this.managementService.getDeviceStatuses().subscribe(x => {
            this.deviceStatus = (x.list && x.list.length > 0) ? x.list : [
                { deviceStatusId: "A1", description: 'Active', id: 0, isDefault: true },
                { deviceStatusId: "A2", description: 'Inactive', id: 0, isDefault: true },
            ];
            if (this.cameraSearchModel.filter) {
                this.cameraSearchModel.filter.status = this.deviceStatus.map(x => x.deviceStatusId);
            }

        });
    }

    showCameraDetailModel(): void {
        console.log('showCameraDetailModel');
    }

    search() {
        this.cameraService.getCameraList(this.cameraSearchModel).subscribe(x => {
            this.cameraList = x.list || [];
        })
    }

    onDeviceStatusCheckChange($event: Boolean, status: DeviceStatus) {
        if (this.cameraSearchModel.filter && this.cameraSearchModel.filter.status) {
            if ($event) {
                this.cameraSearchModel.filter.status.push(status.deviceStatusId);
            } else {
                this.cameraSearchModel.filter.status =
                    this.cameraSearchModel.filter.status.filter(x => x !== status.deviceStatusId);
            }
        }
    }
}
