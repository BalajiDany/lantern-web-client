import { Component, OnInit } from '@angular/core';

import { Theme, ThemeManagerService } from 'src/app/service/theme-manager.service';
import { getSimpleUniqueId } from 'src/app/util/id-generator-util';

@Component({
    selector: 'app-dark-mode-switch',
    templateUrl: './dark-mode-switch.component.html',
    styleUrls: ['./dark-mode-switch.component.css']
})
export class DarkModeSwitchComponent implements OnInit {


    public isChecked: boolean;
    public switchId: string;

    constructor(
        private themeManagerService: ThemeManagerService,
    ) {
        const currentTheme = this.themeManagerService.getCurrentTheme();
        this.isChecked = currentTheme === Theme.DARK;
        this.switchId = getSimpleUniqueId();
    }

    ngOnInit(): void {
    }

    toggleSwitchChange(isOn: boolean): void {
        const theme = isOn ? Theme.DARK : Theme.LIGHT;
        this.themeManagerService.setTheme(theme);
    }

}
