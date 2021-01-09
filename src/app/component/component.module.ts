import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './app-logo/app-logo.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { IconFieldComponent } from './icon-field/icon-field.component';
import { DarkModeSwitchComponent } from './dark-mode-switch/dark-mode-switch.component';


@NgModule({
    declarations: [
        LogoComponent,
        SvgIconComponent,
        IconFieldComponent,
        DarkModeSwitchComponent,
    ],
    exports: [
        LogoComponent,
        SvgIconComponent,
        IconFieldComponent,
        DarkModeSwitchComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
})
export class ComponentModule { }
