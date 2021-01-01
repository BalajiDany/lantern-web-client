import { Subject } from 'rxjs/internal/Subject';
import { filter, takeUntil } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
import { RequestState } from 'src/app/type/request-state';
import { SearchResultVideoCoreViewModel } from 'src/app/view-model/search-view-model';
import { SearchEngineVideoService } from 'src/app/service/search-engine-video.service';
import { isEmptyString } from 'src/app/util/object-util';

@Component({
    selector: 'app-search-result-video',
    templateUrl: './search-result-video.component.html',
    styleUrls: ['./search-result-video.component.css']
})
export class SearchResultVideoComponent implements OnInit {

    @Input() searchQuery = '';

    public RequestStateEnum = RequestState;
    public searchResults: SearchResultVideoCoreViewModel[] = [];
    public requestState: RequestState = RequestState.SEARCH_IN_PROGRESS;

    private isAlive: Subject<void> = new Subject();

    constructor(
        private searchEngineVideoService: SearchEngineVideoService,
    ) { }

    ngOnInit(): void {
        if (isEmptyString(this.searchQuery)) {
            this.requestState = RequestState.SEARCH_REQUEST_EMPTY;
        } else {
            this.watchForTheResult(this.searchQuery);
        }
    }

    private watchForTheResult(searchQuery: string): void {
        this.searchEngineVideoService.resultSubject
            .pipe(takeUntil(this.isAlive), filter(({ query }) => query === searchQuery))
            .subscribe(({ searchResults }) => setTimeout(() => this.searchResults = searchResults, 0));

        this.searchEngineVideoService.statusSubject
            .pipe(takeUntil(this.isAlive))
            .subscribe(status => this.requestState = status);
    }
}
