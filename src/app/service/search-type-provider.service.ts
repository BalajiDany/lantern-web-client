import { Injectable } from '@angular/core';

import { EngineType } from 'src/app/type/engine-type';
import { getDefault } from 'src/app/util/object-util';
import { SearchTypeEntity } from 'src/app/entity/search-type-entity';

const SEARCH_TYPES: SearchTypeEntity[] = [
    {
        index: 1,
        type: EngineType.GENERAL,
    },
    {
        index: 2,
        type: EngineType.CODE,
    },
    {
        index: 3,
        type: EngineType.TORRENT,
    },
    {
        index: 4,
        type: EngineType.VIDEO,
    },
    {
        index: 5,
        type: EngineType.NEWS,
    },
    {
        index: 6,
        type: EngineType.MAP,
    },
];
const DEFAULT_SEARCH_TYPE = EngineType.GENERAL;

@Injectable()
export class SearchTypeProviderService {

    private selectedSearchType: SearchTypeEntity;

    constructor() {
        const defaultSearchType = SEARCH_TYPES.find(searchType => searchType.type === DEFAULT_SEARCH_TYPE);
        this.selectedSearchType = getDefault(defaultSearchType, SEARCH_TYPES[0]);
    }

    getAllSearchTypes(): SearchTypeEntity[] {
        return SEARCH_TYPES;
    }

    getSearchTypesByIndex(index: number): SearchTypeEntity {
        return SEARCH_TYPES.find(searchType => searchType.index === index);
    }

    getSelectedSearchType(): SearchTypeEntity {
        return this.selectedSearchType;
    }

    setSelectedSearchType(searchType: SearchTypeEntity): void {
        this.selectedSearchType = searchType;
    }

    setSelectedSearchTypeByIndex(index: number): void {
        const searchType = this.getSearchTypesByIndex(index);
        this.setSelectedSearchType(searchType);
    }
}
