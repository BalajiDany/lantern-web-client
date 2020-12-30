import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SearchTypeEntity } from 'src/app/entity/search-type-entity';
import { SearchTypeProviderService } from 'src/app/service/search-type-provider.service';

@Component({
    selector: 'app-search-types-tab',
    templateUrl: './search-types-tab.component.html',
    styleUrls: ['./search-types-tab.component.css']
})
export class SearchTypesTabComponent implements OnInit {

    @Input() alignment = 'left';
    @Input() variant = 'tabs';

    @Input() activeTabIndex = 0;
    @Output() activeTabIndexChange: EventEmitter<number> = new EventEmitter<number>();

    public searchTypes: SearchTypeEntity[];

    constructor(
        private searchTypeProviderService: SearchTypeProviderService,
    ) { }

    ngOnInit(): void {
        this.searchTypes = this.searchTypeProviderService.getSearchTypes() || [];
    }

    public onActiveTabIndexChange(event: number): void {
        this.activeTabIndex = event;
        this.activeTabIndexChange.emit(this.activeTabIndex);
    }

}
