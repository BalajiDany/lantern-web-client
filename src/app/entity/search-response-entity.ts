import { EngineResultType } from 'src/app/type/engine-result-type';
import { EngineType } from 'src/app/type/engine-type';

export type SearchResponseGeneralEntity = SearchResponseEntity<SearchResultGeneralCoreEntity>;
export type SearchResponseVideoEntity = SearchResponseEntity<SearchResultVideoCoreEntity>;
export type SearchResponseTorrentEntity = SearchResponseEntity<SearchResultTorrentCoreEntity>;
export type SearchResponseCodeEntity = SearchResponseEntity<SearchResultCodeCoreEntity>;

export interface SearchResponseEntity<T> {
    duration?: number;
    searchResults?: SearchEngineResultEntity<T>[];
}

export interface SearchEngineResultEntity<T> {
    duration?: number;
    engineName?: string;
    engineType?: EngineType;
    engineResultType?: EngineResultType;
    searchResults?: T[];
}

export interface SearchResultGeneralCoreEntity {
    url?: string;
    title?: string;
    content?: string;
}

export interface SearchResultVideoCoreEntity {
    url?: string;
    title?: string;
    content?: string;
    duration?: string;
    uploadedDate?: string;
    thumbnailUrl?: string;
}

export interface SearchResultTorrentCoreEntity {
    seeders?: number;
    leechers?: number;
    category?: string;
    torrentUrl?: string;
    torrentName?: string;
    torrentSize?: string;
    magneticLink?: string;
    uploadedDate?: string;
}

export interface SearchResultCodeCoreEntity {
    url?: string;
    title?: string;
    content?: string;
}
