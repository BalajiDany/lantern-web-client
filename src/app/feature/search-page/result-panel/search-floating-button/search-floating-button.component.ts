import { Subscription } from 'rxjs';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { HotkeysManagerService } from 'src/app/service/hotkeys-manager.service';

@Component({
    selector: 'app-search-floating-button',
    templateUrl: './search-floating-button.component.html',
    styleUrls: ['./search-floating-button.component.css']
})
export class SearchFloatingButtonComponent implements OnInit, OnDestroy {

    @Output() triggerClick = new EventEmitter<void>();

    private shortcut = 'shift.space';
    private hotkeyObserver: Subscription;

    constructor(
        private hotKeysProviderService: HotkeysManagerService,
    ) { }

    ngOnInit(): void {
        this.hotkeyObserver = this.hotKeysProviderService.addShortcut({ keys: this.shortcut })
            .subscribe(() => this.onClick());
    }

    ngOnDestroy(): void {
        this.hotkeyObserver.unsubscribe();
    }

    public onClick(): void {
        this.triggerClick.emit();
    }

}
