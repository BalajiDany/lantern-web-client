import { Injectable } from '@angular/core';

import { EngineType } from 'src/app/type/engine-type';
import { SearchRequestEntity } from 'src/app/entity/search-request-entity';

import { SearchEngineCodeService } from './search-engine-code.service';
import { SearchEngineTorrentService } from './search-engine-torrent.search';
import { SearchEngineGeneralService } from './search-engine-general.service';
import { SearchEngineVideoService } from './search-engine-video.service';

@Injectable()
export class SearchEngineCoreService {

    constructor(
        private searchEngineCodeService: SearchEngineCodeService,
        private searchEngineVideoService: SearchEngineVideoService,
        private searchEngineGeneralService: SearchEngineGeneralService,
        private searchEngineTorrentService: SearchEngineTorrentService,
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
            case EngineType.CODE:
                this.searchEngineCodeService.search(sanitizedSearchRequest);
                break;
            case EngineType.TORRENT:
                this.searchEngineTorrentService.search(sanitizedSearchRequest);
                break;
            case EngineType.VIDEO:
                this.searchEngineVideoService.search(sanitizedSearchRequest);
                break;
        }
    }
}
