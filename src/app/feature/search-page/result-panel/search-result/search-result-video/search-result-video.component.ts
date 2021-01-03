import { Subject } from 'rxjs/internal/Subject';
import { filter, takeUntil } from 'rxjs/operators';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RequestState } from 'src/app/type/request-state';
import { SearchResultVideoCoreViewModel } from 'src/app/view-model/search-view-model';
import { SearchEngineVideoService } from 'src/app/service/search-engine-video.service';
import { isEmptyString } from 'src/app/util/object-util';
import { SearchEngineCoreService } from 'src/app/service/search-engine-core.service';

@Component({
    selector: 'app-search-result-video',
    templateUrl: './search-result-video.component.html',
    styleUrls: ['./search-result-video.component.css']
})
export class SearchResultVideoComponent implements OnInit, OnDestroy {

    @Input() searchQuery = '';

    public RequestStateEnum = RequestState;
    public searchResults: SearchResultVideoCoreViewModel[] = [];
    public requestState: RequestState = RequestState.SEARCH_IN_PROGRESS;

    private isAlive: Subject<void> = new Subject();

    constructor(
        private searchEngineCoreService: SearchEngineCoreService,
        private searchEngineVideoService: SearchEngineVideoService,
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
        this.searchEngineVideoService.resultSubject
            .pipe(takeUntil(this.isAlive), filter(({ query }) => query === this.searchEngineCoreService.getSearchQuery()))
            .subscribe(({ searchResults }) => setTimeout(() => this.searchResults = searchResults, 0));

        this.searchEngineVideoService.statusSubject
            .pipe(takeUntil(this.isAlive))
            .subscribe(status => this.requestState = status);
    }
}
