import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { CameraModel } from 'src/app/models/camera/camera.model';
import { ParkingLaneViewModel } from 'src/app/models/management/parkingLane.model';
import { MultigatesModel } from 'src/app/models/multigate/multigate.model';

@Component({
    selector: 'app-parking-lane-detail',
    templateUrl: './parking-lane-detail.component.html',
    styleUrls: ['./parking-lane-detail.component.scss']
})
export class ParkingLaneDetailComponent implements OnInit {
    parkingLaneForm!: FormGroup;
    confirmButtonLabel: string = 'Thêm làm xe'
    parkingLane: ParkingLaneViewModel = {
        active: "true",
        cameras: [],
        multifunctionGates: [],
        id: 0,
        name: '',
        parkingLaneId: '',
    };
    listOfCameras: CameraModel[] = [
        {
            id: '1',
            name: 'Camera 1',
            serverName: '196.11.23.4',
            cameraId: 0,
            userName: 'admin',
            password: 'admin',
            protocol: 'http',
            streamId: 0,
            urlTemplate: '',
        },
        {
            id: '2',
            name: 'Camera 2',
            serverName: '196.11.23.4',
            cameraId: 0,
            userName: 'admin',
            password: 'admin',
            protocol: 'http',
            streamId: 0,
            urlTemplate: '',
        }
    ];
    listOfMultigates: MultigatesModel[] = [{
        mfgId: '1',
        name: 'Multigate 1',
        protocol: 'http',
        oem: 'ESpace'
    }];
    constructor(private fb: FormBuilder,
        private modal: NzModalRef) {

    }

    ngOnInit(): void {
        this.parkingLaneForm = this.fb.group({
            name: [this.parkingLane.name, Validators.required],
            frontCameraId: [
                this.parkingLane.cameras.length > 0 ?
                    this.parkingLane.cameras[0].id : '', Validators.required],
            backCameraId: [
                this.parkingLane.cameras.length > 1 ?
                    this.parkingLane.cameras[1].id : '', Validators.required],
            multiGateId: [this.parkingLane.multifunctionGates.length > 0 ?
                this.parkingLane.multifunctionGates[0].mfgId : '', Validators.required],
        });
    }

    closeModal() {
        this.modal.destroy({ success: false });
    }

    saveParkingLane() {
        if (this.parkingLaneForm.valid) {
            const camerasId: string[] = [this.parkingLaneForm.get('frontCameraId')?.value || '',
            this.parkingLaneForm.get('backCameraId')?.value || ''];
            const multigatesId = [this.parkingLaneForm.get('multiGateId')?.value || ''];
            const cameras: CameraModel[] = camerasId
                .map(id => this.listOfCameras.find(camera => camera.id === id) as CameraModel);
            const multigates = multigatesId.map(id => this.listOfMultigates.find(multigate => multigate.mfgId === id) as MultigatesModel);
            const parkingLane: ParkingLaneViewModel = {
                active: "true",
                name: this.parkingLaneForm.get('name')?.value,
                cameras: cameras,
                multifunctionGates: multigates,
                id: 0,
                parkingLaneId: '',
            };
            this.modal.destroy({ data: parkingLane, success: true });
        }
    }
}
