import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { RequestState } from 'src/app/type/request-state';
import { isEmptyString } from 'src/app/util/object-util';
import { SearchEngineCodeService } from 'src/app/service/search-engine/search-engine-code.service';
import { SearchResultCodeCoreViewModel } from 'src/app/view-model/search-view-model';
import { SearchEngineCoreService } from 'src/app/service/search-engine/search-engine-core.service';

@Component({
    selector: 'app-search-result-code',
    templateUrl: './search-result-code.component.html',
    styleUrls: ['./search-result-code.component.css']
})
export class SearchResultCodeComponent implements OnInit , OnDestroy {

    public RequestStateEnum = RequestState;
    public searchResults: SearchResultCodeCoreViewModel[] = [];
    public requestState: RequestState = RequestState.SEARCH_IN_PROGRESS;

    private isAlive: Subject<void> = new Subject();

    constructor(
        private searchEngineCodeService: SearchEngineCodeService,
        private searchEngineCoreService: SearchEngineCoreService,
    ) { }

    ngOnInit(): void {
        const searchQuery = this.searchEngineCoreService.getSearchQuery();
        if (isEmptyString(searchQuery)) {
            this.requestState = RequestState.SEARCH_REQUEST_EMPTY;
        } else {
            this.watchForTheResult();
        }
    }

    ngOnDestroy(): void {
        this.isAlive.next();
        this.isAlive.complete();
    }

    private watchForTheResult(): void {
        this.searchEngineCodeService.resultSubject
            .pipe(takeUntil(this.isAlive), filter(({ query }) => query === this.searchEngineCoreService.getSearchQuery()))
            .subscribe(({ searchResults }) => setTimeout(() => this.searchResults = searchResults, 0));

        this.searchEngineCodeService.statusSubject
            .pipe(takeUntil(this.isAlive))
            .subscribe(status => this.requestState = status);
    }

}
