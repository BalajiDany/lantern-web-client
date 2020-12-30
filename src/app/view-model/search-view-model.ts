export type SearchResultGeneralViewModel = SearchResultViewModel<SearchResultGeneralCoreViewModel>;

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
