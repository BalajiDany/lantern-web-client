import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { SearchEngineCoreService } from 'src/app/service/search-engine-core.service';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit, AfterViewInit {

    @ViewChild('searchField') searchField: ElementRef;

    public searchQuery = '';

    constructor(
        private searchEngineCoreService: SearchEngineCoreService,
    ) {
        this.searchQuery = this.searchEngineCoreService.getSearchQuery();
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.searchField.nativeElement.focus();
    }

    public onEnterPress(): void {
        this.searchEngineCoreService.doSearch();
    }

    public onTextChange(): void {
        this.searchEngineCoreService.setSearchQuery(this.searchQuery);
    }
}
