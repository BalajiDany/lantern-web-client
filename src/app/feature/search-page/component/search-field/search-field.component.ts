import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { SearchEngineCoreService } from 'src/app/service/search-engine/search-engine-core.service';
import { LocalSettingModalComponent } from 'src/app/feature/modal/local-setting-modal/local-setting-modal.component';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit, AfterViewInit {

    @Input() enableSetting = true;

    @ViewChild('searchField') searchField: ElementRef;

    public searchQuery = '';

    constructor(
        private modalService: NgbModal,
        private searchEngineCoreService: SearchEngineCoreService,
    ) {
        this.searchQuery = this.searchEngineCoreService.getSearchQuery();
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.searchField.nativeElement.focus();
    }

    public onEnterPress(): void {
        this.searchEngineCoreService.doSearch();
    }

    public onTextChange(): void {
        this.searchEngineCoreService.setSearchQuery(this.searchQuery);
    }

    public onSettingPress(): void {
        const modalOptions: NgbModalOptions = {
            centered: true,
        };
        this.modalService.open(LocalSettingModalComponent, modalOptions);
    }

}
