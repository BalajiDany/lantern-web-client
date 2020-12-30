import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingPageComponent } from './setting-page.component';
import { SettingPageRoutingModule } from './setting-page-routing.module';

@NgModule({
    declarations: [
        SettingPageComponent,
    ],
    imports: [
        CommonModule,
        SettingPageRoutingModule,
    ]
})
export class SettingPageModule { }
