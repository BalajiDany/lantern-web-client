import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './logo/logo.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { DarkModeSwitchComponent } from './dark-mode-switch/dark-mode-switch.component';


@NgModule({
    declarations: [
        LogoComponent,
        SvgIconComponent,
        DarkModeSwitchComponent,
    ],
    exports: [
        LogoComponent,
        SvgIconComponent,
        DarkModeSwitchComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
})
export class ComponentModule { }
