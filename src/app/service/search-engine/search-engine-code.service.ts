import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';

import { SearchEngineCoreService } from './search-engine-core.service';

import { EngineType } from 'src/app/type/engine-type';
import { safeUnsubscribe } from 'src/app/util/rxjs-utils';
import { RequestState } from 'src/app/type/request-state';
import { environment } from 'src/environments/environment';
import { EngineResultType } from 'src/app/type/engine-result-type';
import { getDefault, isEmptyString } from 'src/app/util/object-util';
import { SearchRequestEntity } from 'src/app/entity/search-request-entity';
import { SearchResponseCodeEntity, SearchResultCodeCoreEntity } from 'src/app/entity/search-response-entity';
import { SearchResultCodeCoreViewModel, SearchResultCodeViewModel } from 'src/app/view-model/search-view-model';

@Injectable()
export class SearchEngineCodeService {

    public statusSubject: BehaviorSubject<RequestState>;
    public resultSubject: BehaviorSubject<SearchResultCodeViewModel>;

    private apiEndpoint = environment.baseUrl;
    private previousSearchQuery = '';
    private searchRequestSubscription: Subscription;

    constructor(
        private httpClient: HttpClient,
        private searchEngineCoreService: SearchEngineCoreService,
    ) {
        this.resultSubject = new BehaviorSubject<SearchResultCodeViewModel>({});
        this.statusSubject = new BehaviorSubject<RequestState>(RequestState.SEARCH_REQUEST_EMPTY);
        this.searchEngineCoreService.onSearch()
            .pipe(filter(({ searchType }) => searchType.type === EngineType.CODE))
            .subscribe(searchRequest => this.search(searchRequest));
    }

    public search(searchRequest: SearchRequestEntity): void {
        const { query, location, language } = searchRequest;
        if (isEmptyString(query)) {
            this.statusSubject.next(RequestState.SEARCH_REQUEST_EMPTY);
            return;
        }
        if (this.previousSearchQuery === this.getSearchKey(searchRequest)) {
            this.statusSubject.next(RequestState.SEARCH_RESULT_FOUND);
            return;
        }

        const params = { query, location, language };
        this.statusSubject.next(RequestState.SEARCH_IN_PROGRESS);
        safeUnsubscribe(this.searchRequestSubscription);

        this.searchRequestSubscription = this.httpClient
            .get<SearchResponseCodeEntity>(this.apiEndpoint + '/api/v1/search/code', { params })
            .subscribe(
                response => this.publishResponse(response, searchRequest),
                () => this.statusSubject.next(RequestState.SEARCH_ERROR),
            );
    }

    private publishResponse(searchResultEntity: SearchResponseCodeEntity, searchRequest: SearchRequestEntity): void {
        const viewModel = this.convertEntityToViewModel(searchResultEntity);
        const { searchResults = [] } = viewModel;
        const searchState = searchResults.length > 0 ? RequestState.SEARCH_RESULT_FOUND : RequestState.SEARCH_RESULT_EMPTY;

        if (searchState === RequestState.SEARCH_RESULT_FOUND) {
            this.previousSearchQuery = this.getSearchKey(searchRequest);
        }
        this.statusSubject.next(searchState);
        this.resultSubject.next({ ...viewModel, query: searchRequest.query });
    }

    private getSearchKey(searchRequestEntity: SearchRequestEntity): string {
        return searchRequestEntity.query + ' --' + searchRequestEntity.location;
    }

    private convertEntityToViewModel(searchResultEntity: SearchResponseCodeEntity = {}): SearchResultCodeViewModel {
        const { duration = 0, searchResults: engineSearchResults = [] } = searchResultEntity;
        const mappedViewModel: { [key: string]: SearchResultCodeCoreViewModel } = {};

        const addToMappedViewModel = (resultEntity: SearchResultCodeCoreEntity, engineName: string) => {
            const { content, url, title } = resultEntity;

            const preResultEntity = getDefault(mappedViewModel[url], {});
            const { title: preTitle = '', content: preContent = '' } = preResultEntity;
            const { engines: preEngines = [], rank: preRank = 0 } = preResultEntity;

            mappedViewModel[url] = {
                url,
                title: title.length > preTitle.length ? title : preTitle,
                content: content.length > preContent.length ? content : preContent,
                engines: [...preEngines, engineName],
                rank: preRank + 1,
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
        const searchResults = Object.values(mappedViewModel).sort(({ rank: rankX }, { rank: rankY }) => rankY - rankX);

        return { duration, engineStatus, searchResults };
    }

}
