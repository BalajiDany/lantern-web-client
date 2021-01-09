import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-icon-field',
    templateUrl: './icon-field.component.html',
    styleUrls: ['./icon-field.component.css']
})
export class IconFieldComponent implements OnInit, OnChanges {

    @Input() icon = '';
    @Input() value = '';
    @Input() placeholder = '';
    @Input() disabled: boolean;

    @Output() iconClick = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges({ value }: SimpleChanges): void {
        this.value = value.currentValue;
    }

    public onIconClick(): void {
        this.iconClick.next();
    }

}
