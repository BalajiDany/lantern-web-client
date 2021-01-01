import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-result-card-title',
    templateUrl: './search-result-card-title.component.html',
    styleUrls: ['./search-result-card-title.component.css']
})
export class SearchResultCardTitleComponent implements OnInit {

    @Input() url: string;
    @Input() title: string;

    constructor() { }

    ngOnInit(): void {
    }

}
