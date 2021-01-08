import { Injectable } from '@angular/core';

import { SearchTypeEntity } from 'src/app/entity/search-type-entity';
import { SearchTypeConstant } from 'src/app/constant/search-type-constant';

@Injectable()
export class SearchTypeProviderService {

    private selectedSearchType: SearchTypeEntity;

    constructor() {
        this.selectedSearchType = SearchTypeConstant.DEFAULT_SEARCH_TYPE;
    }

    getAllSearchTypes(): SearchTypeEntity[] {
        return SearchTypeConstant.SEARCH_TYPES;
    }

    getSearchTypesByIndex(index: number): SearchTypeEntity {
        return SearchTypeConstant.getTypeByIndex(index);
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
