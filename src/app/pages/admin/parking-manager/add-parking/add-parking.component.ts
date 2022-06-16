import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ParkingService } from 'src/app/services/admin/ParkingManagement/parking.service';

@Component({
    selector: 'app-add-parking',
    templateUrl: './add-parking.component.html',
    styleUrls: ['./add-parking.component.scss']
})
export class AddParkingComponent implements OnInit {
    addParkingForm!: FormGroup;
    isConfirmLoading: boolean = false;
    constructor(private fb: FormBuilder,
        private parkingService: ParkingService,
        private modal: NzModalRef) {
        this.addParkingForm = this.fb.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            area: ['', Validators.required],
        });
    }

    ngOnInit(): void {
    }
    saveParking() {
        this.isConfirmLoading = true;
        this.parkingService.addNewParking(this.addParkingForm.value)
            .subscribe({
                next: (res) => {
                    console.log(res);
                    this.isConfirmLoading = false;
                    this.modal.destroy();
                },
                error: (e) => console.error(e),
                complete: () => console.info('complete')
            });
    }
    closeModal() {
        this.modal.destroy();
    }
}
