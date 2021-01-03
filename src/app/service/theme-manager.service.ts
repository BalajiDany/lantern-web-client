import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeManagerService {

    private currentTheme: Theme;

    constructor(
        @Inject(DOCUMENT) private document: Document,
    ) {
        const storedTheme = localStorage.getItem('data-theme');
        this.currentTheme = (storedTheme as Theme) || Theme.LIGHT;
        this.storeTheme(this.currentTheme);
    }

    public getCurrentTheme(): Theme {
        return this.currentTheme;
    }

    public setTheme(theme: Theme): void {
        if (this.currentTheme === theme) {
            return;
        }
        this.currentTheme = theme;
        this.storeTheme(theme);
    }

    private storeTheme(theme: Theme): void {
        this.document.body.setAttribute('data-theme', theme);
        localStorage.setItem('data-theme', theme);
    }

}

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}
