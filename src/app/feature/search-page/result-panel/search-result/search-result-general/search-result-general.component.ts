import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';

import { isEmptyString } from 'src/app/util/object-util';
import { RequestState } from 'src/app/type/request-state';
import { SearchResultGeneralCoreViewModel } from 'src/app/view-model/search-view-model';
import { SearchEngineGeneralService } from 'src/app/service/search-engine-general.service';

@Component({
    selector: 'app-search-result-general',
    templateUrl: './search-result-general.component.html',
    styleUrls: ['./search-result-general.component.css']
})
export class SearchResultGeneralComponent implements OnInit {

    @Input() searchQuery = '';

    public RequestStateEnum = RequestState;
    public searchResults: SearchResultGeneralCoreViewModel[] = [];
    public requestState: RequestState = RequestState.SEARCH_IN_PROGRESS;

    private isAlive: Subject<void> = new Subject();

    constructor(
        private searchEngineGeneralService: SearchEngineGeneralService,
    ) { }

    ngOnInit(): void {
        if (isEmptyString(this.searchQuery)) {
            this.requestState = RequestState.SEARCH_REQUEST_EMPTY;
        } else {
            this.watchForTheResult(this.searchQuery);
        }
    }

    private watchForTheResult(searchQuery: string): void {
        this.searchEngineGeneralService.resultSubject
            .pipe(takeUntil(this.isAlive), filter(({ query }) => query === searchQuery))
            .subscribe(({ searchResults }) => setTimeout(() => this.searchResults = searchResults, 0));

        this.searchEngineGeneralService.statusSubject
            .pipe(takeUntil(this.isAlive))
            .subscribe(status => this.requestState = status);
    }

}
