import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SlotType } from 'src/app/models/management/SlotType.model';

@Component({
    selector: 'app-slottype-config',
    templateUrl: './slottype-config.component.html',
    styleUrls: ['./slottype-config.component.scss']
})
export class SlottypeConfigComponent implements OnInit {
    confirmButtonLabel: string = 'Lưu';
    parkingId: string = '';
    slotTypeConfigForm: FormGroup;
    slotTypeList: SlotType[] = [
        { slotTypeId: '1', name: 'Slot 1', description: 'Slot 1 Description' },
        { slotTypeId: '2', name: 'Slot 2', description: 'Slot 2 Description' },
        { slotTypeId: '3', name: 'Slot 3', description: 'Slot 3 Description' },
    ];
    constructor(private fb: FormBuilder) {
        this.slotTypeConfigForm = this.fb.group({
            slotTypeId: ['', Validators.required],
            quantity: [0, [Validators.required, Validators.min(0)]],
        })
    }

    ngOnInit(): void {
    }

    closeModal() { }
    saveSlottypeConfig() {
        console.log(this.slotTypeConfigForm.value);
    }
}
