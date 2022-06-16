import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ParkingViewModel } from 'src/app/models/management/parking.model';
import { AddParkingComponent } from '../add-parking/add-parking.component';

@Component({
    selector: 'app-parking-list',
    templateUrl: './parking-list.component.html',
    styleUrls: ['./parking-list.component.scss']
})
export class ParkingListComponent implements OnInit {
    dataSet: ParkingViewModel[] = [];
    areas: string[] = [
        "Khu vực 1",
        "Khu vực 2",
        "Khu vực 3",
        "Khu vực 4",
    ];
    selectedArea: string = "";
    constructor(private modalService: NzModalService) { }

    ngOnInit(): void {
    }
    showAddParkingModal() {
        const modalRef = this.modalService.create({
            nzTitle: "Thêm bãi xe",
            nzContent: AddParkingComponent,
            nzOkText: "Lưu",
            nzCancelText: "Hủy",
            nzOkLoading: false,
            nzMaskClosable: false
        });
    }
}
