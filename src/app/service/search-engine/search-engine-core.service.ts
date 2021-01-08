import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { LocalSettingsService } from '../settings/local-settings.service';
import { SearchTypeProviderService } from '../search-type-provider.service';

import { isEmptyObject } from 'src/app/util/object-util';
import { SearchRequestEntity } from 'src/app/entity/search-request-entity';

@Injectable()
export class SearchEngineCoreService {

    private searchQuery = '';
    private searchRequestSubject: BehaviorSubject<SearchRequestEntity>;

    constructor(
        private searchTypeProviderService: SearchTypeProviderService,
        private localSettingsService: LocalSettingsService,
    ) {
        this.searchRequestSubject = new BehaviorSubject<SearchRequestEntity>({});
    }

    public doSearch(): void {
        const query = this.searchQuery.trim();
        const searchType = this.searchTypeProviderService.getSelectedSearchType();
        const { location, language } = this.localSettingsService.getSettings();

        const searchQuery: SearchRequestEntity = {
            query, searchType,
            location: location.locationId,
            language: language.languageId,
        }

        this.searchRequestSubject.next(searchQuery);
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
