import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Injectable()
export class HotkeysManagerService {

    private defaults: Partial<HotKeysOption> = {
        element: this.document,
    };

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private eventManager: EventManager,
    ) { }

    addShortcut(options: Partial<HotKeysOption>): Observable<any> {
        const merged = { ...this.defaults, ...options };
        const event = `keydown.${merged.keys}`;

        return new Observable(observer => {
            const handler = (keyEvent: Event) => {
                keyEvent.preventDefault();
                observer.next(keyEvent);
            };
            const dispose = this.eventManager.addEventListener(
                merged.element, event, handler
            );

            return () => {
                dispose();
            };
        });
    }
}

export interface HotKeysOption {
    element: any;
    keys: string;
}
