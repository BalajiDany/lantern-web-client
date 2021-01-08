import { EngineType } from 'src/app/type/engine-type';
import { SearchTypeEntity } from 'src/app/entity/search-type-entity';

export class SearchTypeConstant {

    public static SEARCH_TYPES: SearchTypeEntity[] = [
        { index: 1, type: EngineType.GENERAL, },
        { index: 2, type: EngineType.CODE, },
        { index: 3, type: EngineType.TORRENT, },
        { index: 4, type: EngineType.VIDEO, },
        { index: 5, type: EngineType.NEWS, },
        { index: 6, type: EngineType.MAP, },
    ];

    public static DEFAULT_SEARCH_TYPE = SearchTypeConstant.SEARCH_TYPES
        .find(searchType => searchType.type === EngineType.GENERAL);

    public static getTypeByIndex = (index: number) => {
        return SearchTypeConstant.SEARCH_TYPES
            .find(searchType => searchType.index === index)
            || SearchTypeConstant.DEFAULT_SEARCH_TYPE;
    }

}
