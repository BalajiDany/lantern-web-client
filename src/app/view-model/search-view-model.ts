export type SearchResultCodeViewModel = SearchResultViewModel<SearchResultCodeCoreViewModel>;
export type SearchResultGeneralViewModel = SearchResultViewModel<SearchResultGeneralCoreViewModel>;
export type SearchResultTorrentViewModel = SearchResultViewModel<SearchResultTorrentCoreViewModel>;
export type SearchResultVideoViewModel = SearchResultViewModel<SearchResultVideoCoreViewModel>;

export interface SearchResultViewModel<T> {
    query?: string;
    duration?: number;
    engineStatus?: SearchEngineStatusViewModel[];
    searchResults?: T[];
}

export interface SearchEngineStatusViewModel {
    duration: number;
    engineName: string;
    resultCount: number;
    engineResultType: string;
}

export interface SearchResultGeneralCoreViewModel {
    url?: string;
    title?: string;
    content?: string;
    engines?: string[];
    rank?: number;
}

export interface SearchResultCodeCoreViewModel {
    url?: string;
    title?: string;
    content?: string;
    engines?: string[];
    rank?: number;
}

export interface SearchResultTorrentCoreViewModel {
    magneticLink?: string;
    torrentName?: string;
    torrentSize?: string;
    torrentUrl?: string;
    uploadedDate?: string;
    category?: string;
    seeders?: number;
    leechers?: number;
    engines?: string[];
}

export interface SearchResultVideoCoreViewModel {
    url?: string;
    title?: string;
    content?: string;
    uploadedDate?: string;
    duration?: string;
    thumbnailUrl?: string;
    engines?: string[];
    rank?: number;
}
