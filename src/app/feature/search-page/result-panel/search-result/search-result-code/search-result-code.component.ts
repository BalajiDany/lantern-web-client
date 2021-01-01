import { Subject } from 'rxjs/internal/Subject';
import { filter, takeUntil } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';

import { RequestState } from 'src/app/type/request-state';
import { isEmptyString } from 'src/app/util/object-util';
import { SearchEngineCodeService } from 'src/app/service/search-engine-code.service';
import { SearchResultCodeCoreViewModel } from 'src/app/view-model/search-view-model';

@Component({
    selector: 'app-search-result-code',
    templateUrl: './search-result-code.component.html',
    styleUrls: ['./search-result-code.component.css']
})
export class SearchResultCodeComponent implements OnInit {

    @Input() searchQuery = '';

    public RequestStateEnum = RequestState;
    public searchResults: SearchResultCodeCoreViewModel[] = [];
    public requestState: RequestState = RequestState.SEARCH_IN_PROGRESS;

    private isAlive: Subject<void> = new Subject();

    constructor(
        private searchEngineCodeService: SearchEngineCodeService,
    ) { }

    ngOnInit(): void {
        if (isEmptyString(this.searchQuery)) {
            this.requestState = RequestState.SEARCH_REQUEST_EMPTY;
        } else {
            this.watchForTheResult(this.searchQuery);
        }
    }

    private watchForTheResult(searchQuery: string): void {
        this.searchEngineCodeService.resultSubject
            .pipe(takeUntil(this.isAlive), filter(({ query }) => query === searchQuery))
            .subscribe(({ searchResults }) => setTimeout(() => this.searchResults = searchResults, 0));

        this.searchEngineCodeService.statusSubject
            .pipe(takeUntil(this.isAlive))
            .subscribe(status => this.requestState = status);
    }

}
