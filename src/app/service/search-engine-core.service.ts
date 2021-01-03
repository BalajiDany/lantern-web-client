import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { SearchTypeProviderService } from './search-type-provider.service';

import { isEmptyObject } from 'src/app/util/object-util';
import { SearchRequestEntity } from 'src/app/entity/search-request-entity';

@Injectable()
export class SearchEngineCoreService {

    private searchQuery = '';
    private searchRequestSubject: BehaviorSubject<SearchRequestEntity>;

    constructor(
        private searchTypeProviderService: SearchTypeProviderService,
    ) {
        this.searchRequestSubject = new BehaviorSubject<SearchRequestEntity>({});
    }

    public doSearch(): void {
        const query = this.searchQuery.trim();
        const searchType = this.searchTypeProviderService.getSelectedSearchType();
        this.searchRequestSubject.next({ query, searchType });
    }

    public onSearch(): Observable<SearchRequestEntity> {
        return this.searchRequestSubject.pipe(
            filter(request => !isEmptyObject(request))
        );
    }

    public setSearchQuery(query: string): void {
        this.searchQuery = query;
    }

    public getSearchQuery(): string {
        return this.searchQuery;
    }
}
