import { Subject } from 'rxjs/internal/Subject';
import { filter, takeUntil } from 'rxjs/operators';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { isEmptyString } from 'src/app/util/object-util';
import { RequestState } from 'src/app/type/request-state';
import { SearchEngineCoreService } from 'src/app/service/search-engine/search-engine-core.service';
import { SearchResultTorrentCoreViewModel } from 'src/app/view-model/search-view-model';
import { SearchEngineTorrentService } from 'src/app/service/search-engine/search-engine-torrent.search';

@Component({
    selector: 'app-search-result-torrent',
    templateUrl: './search-result-torrent.component.html',
    styleUrls: ['./search-result-torrent.component.css']
})
export class SearchResultTorrentComponent implements OnInit, OnDestroy {

    @Input() searchQuery = '';

    public RequestStateEnum = RequestState;
    public searchResults: SearchResultTorrentCoreViewModel[] = [];
    public requestState: RequestState = RequestState.SEARCH_IN_PROGRESS;

    private isAlive: Subject<void> = new Subject();

    constructor(
        private searchEngineCoreService: SearchEngineCoreService,
        private searchEngineCodeService: SearchEngineTorrentService,
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
