import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NzTableModule } from 'ng-zorro-antd/table';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

export const NB_CORE_PROVIDERS = [
    ...(NbAuthModule.forRoot({
        strategies: [
            NbPasswordAuthStrategy.setup({
                name: 'email',
                baseEndpoint: '',
                login: {
                    endpoint: `${environment.apiURL}/sign-in`,
                },
                register: {
                    endpoint: `${environment.apiURL}/register`,
                },
            }
            ),
        ],
    }).providers || []),
];

@NgModule({
    imports: [
        CommonModule,
        NzTableModule,
        FormsModule
    ],
    exports: [
        NbAuthModule,
        NzTableModule,
        FormsModule
    ],
    declarations: [],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

    }

    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                ...NB_CORE_PROVIDERS,
            ],
        };
    }
}
