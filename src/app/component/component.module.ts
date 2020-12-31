import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogoComponent } from './logo/logo.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';

@NgModule({
    declarations: [
        LogoComponent,
        SvgIconComponent,
    ],
    exports: [
        LogoComponent,
        SvgIconComponent,
    ],
    imports: [
        CommonModule,
    ]
})
export class ComponentModule { }
