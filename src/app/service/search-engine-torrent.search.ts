import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { isEmptyString } from 'src/app/util/object-util';
import { safeUnsubscribe } from 'src/app/util/rxjs-utils';
import { RequestState } from 'src/app/type/request-state';
import { environment } from 'src/environments/environment';
import { EngineResultType } from 'src/app/type/engine-result-type';
import { SearchRequestEntity } from 'src/app/entity/search-request-entity';
import { SearchResultTorrentCoreViewModel, SearchResultTorrentViewModel } from 'src/app/view-model/search-view-model';
import { SearchResponseTorrentEntity, SearchResultTorrentCoreEntity } from 'src/app/entity/search-response-entity';


@Injectable()
export class SearchEngineTorrentService {

    public statusSubject: BehaviorSubject<RequestState>;
    public resultSubject: BehaviorSubject<SearchResultTorrentViewModel>;

    private apiEndpoint = environment.baseUrl;
    private previousSearchQuery = '';
    private searchRequestSubscription: Subscription;

    constructor(
        private httpClient: HttpClient,
    ) {
        this.resultSubject = new BehaviorSubject<SearchResultTorrentViewModel>({});
        this.statusSubject = new BehaviorSubject<RequestState>(RequestState.SEARCH_REQUEST_EMPTY);
    }

    public search(searchRequest: SearchRequestEntity): void {
        if (isEmptyString(searchRequest.query)) {
            this.statusSubject.next(RequestState.SEARCH_REQUEST_EMPTY);
            return;
        }
        if (this.previousSearchQuery === searchRequest.query) {
            this.statusSubject.next(RequestState.SEARCH_RESULT_FOUND);
            return;
        }

        const params = { query: searchRequest.query };
        this.statusSubject.next(RequestState.SEARCH_IN_PROGRESS);
        safeUnsubscribe(this.searchRequestSubscription);

        this.searchRequestSubscription = this.httpClient
            .get<SearchResponseTorrentEntity>(this.apiEndpoint + '/api/v1/search/torrent', { params })
            .subscribe(
                response => this.publishResponse(response, searchRequest),
                () => this.statusSubject.next(RequestState.SEARCH_ERROR),
            );
    }

    private publishResponse(searchResultEntity: SearchResponseTorrentEntity, searchRequest: SearchRequestEntity): void {
        const viewModel = this.convertEntityToViewModel(searchResultEntity);
        const { searchResults = [] } = viewModel;
        const searchState = searchResults.length > 0 ? RequestState.SEARCH_RESULT_FOUND : RequestState.SEARCH_RESULT_EMPTY;

        if (searchState === RequestState.SEARCH_RESULT_FOUND) {
            this.previousSearchQuery = searchRequest.query;
        }
        this.statusSubject.next(searchState);
        this.resultSubject.next({ ...viewModel, query: searchRequest.query });
    }

    private convertEntityToViewModel(searchResultEntity: SearchResponseTorrentEntity = {}): SearchResultTorrentViewModel {
        const { duration = 0, searchResults: engineSearchResults = [] } = searchResultEntity;
        const mappedViewModel: { [key: string]: SearchResultTorrentCoreViewModel } = {};

        const addToMappedViewModel = (resultEntity: SearchResultTorrentCoreEntity, engineName: string) => {
            const { torrentName = '', torrentSize = '' } = resultEntity;
            const { torrentUrl = '', magneticLink = '' } = resultEntity;
            const { seeders = 0, leechers = 0} = resultEntity;
            const { category, uploadedDate } = resultEntity;

            mappedViewModel[torrentUrl] = {
                torrentName, torrentSize,
                torrentUrl, magneticLink,
                category, uploadedDate,
                seeders, leechers,
                engines: [engineName],
            };
        };

        const engineStatus = engineSearchResults
            .map(engineSearchResult => {
                const { duration: searchDuration, engineName } = engineSearchResult;
                const { searchResults: individualSearchResult = [], engineResultType } = engineSearchResult;
                let resultCount = 0;

                if (engineResultType === EngineResultType.FOUND_SEARCH_RESULT) {
                    resultCount = individualSearchResult.length;
                    individualSearchResult.forEach(searchResult => addToMappedViewModel(searchResult, engineName));
                }
                return { duration: searchDuration, engineName, engineResultType, resultCount };
            });
        const searchResults = Object.values(mappedViewModel).sort(({ seeders: seedersX }, { seeders: seedersY }) => seedersY - seedersX);

        return { duration, engineStatus, searchResults };
    }

}
