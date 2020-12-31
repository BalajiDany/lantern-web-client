import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit, AfterViewInit {

    @Output() triggerSearch = new EventEmitter<string>();

    @Input() searchQuery = '';
    @Output() searchQueryChange: EventEmitter<string> = new EventEmitter<string>();

    @ViewChild('searchField') searchField: ElementRef;

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.searchField.nativeElement.focus();
    }

    public onEnterPress(): void {
        this.triggerSearch.emit(this.searchQuery);
    }

    public onTextChange(): void {
        this.searchQueryChange.emit(this.searchQuery);
    }
}
