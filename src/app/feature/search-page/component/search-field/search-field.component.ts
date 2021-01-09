import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


import { LocalSettingsService } from 'src/app/service/settings/local-settings.service';
import { SearchEngineCoreService } from 'src/app/service/search-engine/search-engine-core.service';
import { LanguageSettingModalComponent } from 'src/app/feature/modal/language-setting-modal/language-setting-modal.component';
import { LocationSettingModalComponent } from 'src/app/feature/modal/location-setting-modal/location-setting-modal.component';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit, AfterViewInit {

    @Input() enableSetting = true;

    @ViewChild('searchField') searchField: ElementRef;

    public searchQuery = '';
    public showSetting = false;
    public currentLocation = '';
    public currentLanguage = '';

    constructor(
        private modalService: NgbModal,
        private searchEngineCoreService: SearchEngineCoreService,
        private localSettingService: LocalSettingsService,
    ) {
        this.searchQuery = this.searchEngineCoreService.getSearchQuery();
        this.refreshAllSetting();
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
        this.showSetting = !this.showSetting;
    }

    public onLocationClick(): void {
        const modalOptions: NgbModalOptions = {
            centered: true,
        };
        this.modalService.open(LocationSettingModalComponent, modalOptions)
            .result.then(() => this.refreshLocation());
    }

    public onLanguageClick(): void {
        const modalOptions: NgbModalOptions = {
            centered: true,
        };
        this.modalService.open(LanguageSettingModalComponent, modalOptions)
            .result.then(() => this.refreshLanguage());
    }

    public onTimeRangeClick(): void {
        console.log('hello world');
    }

    private refreshAllSetting(): void {
        this.refreshLanguage();
        this.refreshLocation();
    }

    private refreshLocation(): void {
        const { location } = this.localSettingService.getSettings();
        this.currentLocation = location.locationName;
    }

    private refreshLanguage(): void {
        const { language } = this.localSettingService.getSettings();
        this.currentLanguage = language.languageName;
    }

}
