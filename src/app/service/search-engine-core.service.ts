import { Injectable } from '@angular/core';

import { EngineType } from 'src/app/type/engine-type';
import { SearchRequestEntity } from 'src/app/entity/search-request-entity';

import { SearchEngineGeneralService } from './search-engine-general.service';

@Injectable()
export class SearchEngineCoreService {

    constructor(
        private searchEngineGeneralService: SearchEngineGeneralService,
    ) { }

    public search(searchRequest: SearchRequestEntity): void {
        const sanitizedSearchRequest = {
            ...searchRequest,
            query: searchRequest.query.trim(),
        };
        switch (searchRequest.searchType.type) {
            case EngineType.GENERAL:
                this.searchEngineGeneralService.search(sanitizedSearchRequest);
                break;
        }
    }
}
