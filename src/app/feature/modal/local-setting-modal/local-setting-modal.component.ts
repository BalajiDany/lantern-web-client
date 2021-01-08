import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalSettingsEntity } from 'src/app/entity/setting-entity';
import { SupportedLocationEntity } from 'src/app/entity/supported-location-entity';
import { LocalSettingsService } from 'src/app/service/settings/local-settings.service';
import { SupportedLocationConstant } from 'src/app/constant/supported-location-constant';
import { SupportedLanguageEntity } from 'src/app/entity/supported-language-constant';
import { SupportedLanguageConstant } from 'src/app/constant/supported-language-constant';

@Component({
    selector: 'app-local-setting-modal',
    templateUrl: './local-setting-modal.component.html',
    styleUrls: ['./local-setting-modal.component.css']
})
export class LocalSettingModalComponent implements OnInit {

    public supportedLocations: SupportedLocationEntity[] = SupportedLocationConstant.SUPPORTED_LOCATIONS;
    public supportedLanguages: SupportedLanguageEntity[] = SupportedLanguageConstant.SUPPORTED_LANGUAGES;

    public localSettingFormGroup = new FormGroup({
        location: new FormControl(''),
        language: new FormControl(''),
    });

    constructor(
        private ngbActiveModal: NgbActiveModal,
        private localSettingsService: LocalSettingsService,
    ) {
        this.loadSettings();
    }

    ngOnInit(): void {
    }

    public cancelSetting(): void {
        this.ngbActiveModal.dismiss('close');
    }

    public saveSetting(): void {
        const saveEntity = this.getSaveEntity();
        this.localSettingsService.persistSetting(saveEntity);
        this.ngbActiveModal.close('save');
    }

    private getSaveEntity(): LocalSettingsEntity {
        const { location, language } = this.localSettingFormGroup.value;
        return {
            location: SupportedLocationConstant.getLocationById(location),
            language: SupportedLanguageConstant.getLanguageById(language),
        };
    }

    private loadSettings(): void {
        const { location, language } = this.localSettingsService.getSettings();

        const { locationId } = location ? location
            : SupportedLocationConstant.DEFAULT_SUPPORTED_LOCATION;
        const { languageId } = language ? language
            : SupportedLanguageConstant.DEFAULT_SUPPORTED_LANGUAGE;

        this.localSettingFormGroup.setValue({
            location: locationId,
            language: languageId,
        });
    }

}
