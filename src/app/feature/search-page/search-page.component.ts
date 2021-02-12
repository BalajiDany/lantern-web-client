import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';

import { SearchEngineCoreService } from 'src/app/service/search-engine/search-engine-core.service';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

    public enableSearchPanel = false;

    private isAlive: Subject<void> = new Subject();

    constructor(
        private searchEngineCoreService: SearchEngineCoreService,
    ) {
        this.searchEngineCoreService.onSearch()
            .pipe(
                takeUntil(this.isAlive),
                filter(() => this.enableSearchPanel)
            )
            .subscribe(() => this.showResultPanel());
    }

    ngOnInit(): void {
    }

    public showSearchPanel(): void {
        this.enableSearchPanel = true;
    }

    public showResultPanel(): void {
        this.enableSearchPanel = false;
    }

}
