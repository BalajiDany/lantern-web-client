import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { LocalSettingsEntity } from 'src/app/entity/setting-entity';
import { SupportedLanguageEntity } from 'src/app/entity/supported-language-constant';
import { LocalSettingsService } from 'src/app/service/settings/local-settings.service';
import { SupportedLanguageConstant } from 'src/app/constant/supported-language-constant';

@Component({
    selector: 'app-language-setting-modal',
    templateUrl: './language-setting-modal.component.html',
    styleUrls: ['./language-setting-modal.component.css']
})
export class LanguageSettingModalComponent implements OnInit {

    public supportedLanguages: SupportedLanguageEntity[] = SupportedLanguageConstant.SUPPORTED_LANGUAGES;

    public localSettingFormGroup = new FormGroup({
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

    public saveSetting(): void {
        const saveEntity = this.getSaveEntity();
        this.localSettingsService.persistSetting(saveEntity);
        this.ngbActiveModal.close();
    }

    private getSaveEntity(): LocalSettingsEntity {
        const { language } = this.localSettingFormGroup.value;
        return {
            language: SupportedLanguageConstant.getLanguageById(language),
        };
    }

    public cancelSetting(): void {
        this.ngbActiveModal.dismiss();
    }

    private loadSettings(): void {
        const { language } = this.localSettingsService.getSettings();
        const { languageId } = language ? language
            : SupportedLanguageConstant.DEFAULT_SUPPORTED_LANGUAGE;

        this.localSettingFormGroup.setValue({
            language: languageId,
        });
    }

}
