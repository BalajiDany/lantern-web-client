import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { EngineType } from 'src/app/type/engine-type';
import { SearchTypeEntity } from 'src/app/entity/search-type-entity';
import { SearchEngineCoreService } from 'src/app/service/search-engine/search-engine-core.service';
import { SearchTypeProviderService } from 'src/app/service/search-type-provider.service';
import { SearchEngineGeneralService } from 'src/app/service/search-engine/search-engine-general.service';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy {

    @Input() searchQuery = '';
    @Input() searchTypeIndex = 1;

    public searchTypeModel: SearchTypeEntity;
    public SearchTypeEnum = EngineType;

    private isAlive: Subject<void> = new Subject();

    constructor(
        private searchEngineCoreService: SearchEngineCoreService,
    ) {
        this.searchEngineCoreService.onSearch()
            .pipe(takeUntil(this.isAlive))
            .subscribe(({ searchType }) => this.searchTypeModel = searchType);
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.isAlive.next();
        this.isAlive.complete();
    }

}
