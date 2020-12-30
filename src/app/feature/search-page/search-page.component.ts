import { Component, OnInit } from '@angular/core';

import { SearchTypeProviderService } from 'src/app/service/search-type-provider.service';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

    public searchQuery = '';
    public showPageSearch = true;
    public activeTabIndex: number;

    constructor(
        private searchTypeProviderService: SearchTypeProviderService,
    ) {
        const defaultSearchType = this.searchTypeProviderService.getDefaultSearchTypes();
        if (defaultSearchType) {
            this.activeTabIndex = defaultSearchType.index;
        }
    }

    ngOnInit(): void {
    }

    public onActiveTabIndexChange(): void {
        this.performSearch();
    }

    public performSearch(): void {
        if (this.searchQuery && this.searchQuery.trim().length > 0) {
            this.showResultPanel();
        }
    }

    public showSearchPanel(): void {
        this.showPageSearch = true;
    }

    public showResultPanel(): void {
        this.showPageSearch = false;
    }

}
