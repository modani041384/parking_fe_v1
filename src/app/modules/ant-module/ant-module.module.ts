import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTagModule } from 'ng-zorro-antd/tag';


@NgModule({
    declarations: [],
    exports: [
        CommonModule,
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
        NzCollapseModule,
        NzTagModule
    ]
})
export class AntModuleModule { }
