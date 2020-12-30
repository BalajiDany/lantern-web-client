import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { EngineType } from 'src/app/type/engine-type';
import { SearchTypeEntity } from 'src/app/entity/search-type-entity';
import { SearchEngineCoreService } from 'src/app/service/search-engine-core.service';
import { SearchTypeProviderService } from 'src/app/service/search-type-provider.service';
import { SearchEngineGeneralService } from 'src/app/service/search-engine-general.service';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnChanges, OnDestroy {

    @Input() searchQuery = '';
    @Input() searchTypeIndex = 1;

    public searchTypeModel: SearchTypeEntity;
    public SearchTypeEnum: EngineType;

    private isAlive: Subject<void> = new Subject();

    constructor(
        private searchTypeProviderService: SearchTypeProviderService,
        private searchEngineGeneralService: SearchEngineGeneralService,
        private searchEngineCoreService: SearchEngineCoreService,
    ) {
        this.searchTypeModel = this.searchTypeProviderService.getDefaultSearchTypes();
    }

    ngOnInit(): void {
        this.searchEngineGeneralService.resultSubject
            .pipe(takeUntil(this.isAlive))
            .subscribe(response => console.log(response));
        this.searchEngineGeneralService.statusSubject
            .pipe(takeUntil(this.isAlive))
            .subscribe(response => console.log(response));
    }

    ngOnDestroy(): void {
        this.isAlive.next();
        this.isAlive.complete();
    }

    ngOnChanges({ searchTypeIndex }: SimpleChanges): void {
        if (searchTypeIndex) {
            const { currentValue } = searchTypeIndex;
            this.searchTypeModel = this.searchTypeProviderService.getSearchTypesByIndex(currentValue);
        }
        this.performSearch();
    }

    private performSearch(): void {
        const searchRequest = {
            query: this.searchQuery,
            searchType: this.searchTypeModel,
        };
        this.searchEngineCoreService.search(searchRequest);
    }

}
