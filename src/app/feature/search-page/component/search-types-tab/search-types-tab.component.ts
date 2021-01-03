import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SearchTypeEntity } from 'src/app/entity/search-type-entity';
import { SearchEngineCoreService } from 'src/app/service/search-engine-core.service';
import { SearchTypeProviderService } from 'src/app/service/search-type-provider.service';

@Component({
    selector: 'app-search-types-tab',
    templateUrl: './search-types-tab.component.html',
    styleUrls: ['./search-types-tab.component.css']
})
export class SearchTypesTabComponent implements OnInit {

    @Input() alignment = 'left';
    @Input() variant = 'tabs';

    public activeTabIndex = 0;
    public searchTypes: SearchTypeEntity[];

    constructor(
        private searchTypeProviderService: SearchTypeProviderService,
        private searchEngineCoreService: SearchEngineCoreService,
    ) {
        this.searchTypes = this.searchTypeProviderService.getAllSearchTypes() || [];
        const { index: selectedIndex } = this.searchTypeProviderService.getSelectedSearchType();
        this.activeTabIndex = selectedIndex;
    }

    ngOnInit(): void {
    }

    public onActiveTabIndexChange(event: number): void {
        this.searchTypeProviderService.setSelectedSearchTypeByIndex(event);
        this.searchEngineCoreService.doSearch();
    }

}
