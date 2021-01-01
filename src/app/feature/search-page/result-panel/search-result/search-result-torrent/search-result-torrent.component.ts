import { Subject } from 'rxjs/internal/Subject';
import { filter, takeUntil } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';

import { isEmptyString } from 'src/app/util/object-util';
import { RequestState } from 'src/app/type/request-state';
import { SearchResultTorrentCoreViewModel } from 'src/app/view-model/search-view-model';
import { SearchEngineTorrentService } from 'src/app/service/search-engine-torrent.search';

@Component({
    selector: 'app-search-result-torrent',
    templateUrl: './search-result-torrent.component.html',
    styleUrls: ['./search-result-torrent.component.css']
})
export class SearchResultTorrentComponent implements OnInit {

    @Input() searchQuery = '';

    public RequestStateEnum = RequestState;
    public searchResults: SearchResultTorrentCoreViewModel[] = [];
    public requestState: RequestState = RequestState.SEARCH_IN_PROGRESS;

    private isAlive: Subject<void> = new Subject();

    constructor(
        private searchEngineCodeService: SearchEngineTorrentService,
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
