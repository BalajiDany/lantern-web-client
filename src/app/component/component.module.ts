import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
    declarations: [
        AboutComponent,
        LogoComponent,
    ],
    exports: [
        AboutComponent,
        LogoComponent,
    ],
    imports: [
        CommonModule,
    ]
})
export class ComponentModule { }
