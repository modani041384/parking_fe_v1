import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ParkingViewModel } from 'src/app/models/management/parking.model';
import { ParkingLaneViewModel } from 'src/app/models/management/parkingLane.model';
import { ParkingLaneDetailComponent } from '../parking-lane-detail/parking-lane-detail.component';
import { SlottypeConfigComponent } from '../slottype-config/slottype-config.component';

@Component({
    selector: 'app-parking-detail',
    templateUrl: './parking-detail.component.html',
    styleUrls: ['./parking-detail.component.scss']
})
export class ParkingDetailComponent implements OnInit {
    parkingFg: FormGroup;
    parking: ParkingViewModel = {
        parkingId: '',
        name: '',
        address: '',
        area: '',
        parkingLanes: [],
        cardAssignment: [],
        slotTypeConfigs: [],
    };
    constructor(private fb: FormBuilder, private route: ActivatedRoute,
        private modalService: NzModalService) {
        const parkingId = this.route.snapshot.paramMap.get('parkingId');
        this.parkingFg = this.fb.group({
            name: [this.parking.name || '', Validators.required],
            address: [this.parking.address || ''],
            area: [this.parking.area || ''],
        });

        this.route.data.subscribe(data => {
            console.log(data);

        })

    }

    buildForm() {
        this.parkingFg = this.fb.group({
            name: [this.parking?.name || '', Validators.required],
            address: [this.parking?.address || ''],
            area: [this.parking?.area || ''],
        });
    }

    addLane() {
        const modalRef = this.modalService.create({
            nzTitle: "Thêm bãi xe",
            nzContent: ParkingLaneDetailComponent,
            nzOkText: "Lưu",
            nzCancelText: "Hủy",
            nzOkLoading: false
        });
        modalRef.afterClose.subscribe(result => {
            if (result.success) {
                this.parking.parkingLanes.push(result.data);
            }
        })
    }
    editParkingLane(index: number, $event: any) {
        const parkingLane: ParkingLaneViewModel = this.parking.parkingLanes[index];
        $event.stopPropagation();
        const modalRef = this.modalService.create({
            nzTitle: "Sửa làn xe",
            nzContent: ParkingLaneDetailComponent,
            nzOkText: "Lưu",
            nzCancelText: "Hủy",
            nzOkLoading: false,
            nzComponentParams: {
                parkingLane: parkingLane,
                confirmButtonLabel: "Lưu thay đổi"
            }
        });
        modalRef.afterClose.subscribe(result => {
            if (result.success) {
                this.parking.parkingLanes[index] = result.data;
            }
        })
    }

    addSlotConfig() {
        const modalRef = this.modalService.create({
            nzTitle: "Thêm loại chỗ đậu xe",
            nzContent: SlottypeConfigComponent,
            nzOkText: "Lưu",
            nzCancelText: "Hủy",
            nzOkLoading: false
        });
        modalRef.afterClose.subscribe(result => {
            if (result.success) {
                this.parking.parkingLanes.push(result.data);
            }
        })
    }

    ngOnInit(): void {

    }

}
