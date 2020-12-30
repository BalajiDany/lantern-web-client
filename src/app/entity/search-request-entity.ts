import { SearchTypeEntity } from './search-type-entity';

export interface SearchRequestEntity {
    query?: string;
    searchType?: SearchTypeEntity;
}
