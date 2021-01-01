import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-result-card-engines',
    templateUrl: './search-result-card-engines.component.html',
    styleUrls: ['./search-result-card-engines.component.css']
})
export class SearchResultCardEnginesComponent implements OnInit {

    @Input() engines: string[];

    constructor() { }

    ngOnInit(): void {
    }

}
