import { Injectable } from '@angular/core';

import { LocalSettingsEntity } from 'src/app/entity/setting-entity';
import { SupportedLocationConstant } from 'src/app/constant/supported-location-constant';
import { SupportedLanguageConstant } from 'src/app/constant/supported-language-constant';

@Injectable({
    providedIn: 'root',
})
export class LocalSettingsService {

    private localSettingsEntity: LocalSettingsEntity = {
        location: SupportedLocationConstant.DEFAULT_SUPPORTED_LOCATION,
        language: SupportedLanguageConstant.DEFAULT_SUPPORTED_LANGUAGE,
        pageNo: 0,
    };

    constructor() {
        const stringifiedSetting = localStorage.getItem('data-settings');
        const savedSetting = this.parseSettings(stringifiedSetting || '{}');
        this.localSettingsEntity = {
            ...this.localSettingsEntity,
            ...savedSetting,
        };
    }

    getSettings(): LocalSettingsEntity {
        return this.localSettingsEntity;
    }

    persistSetting(localSettingsEntity: LocalSettingsEntity = {}): void {
        this.localSettingsEntity = {
            ...this.localSettingsEntity,
            ...localSettingsEntity,
        };
        const stringifiedSetting = this.stringifySettings(this.localSettingsEntity);
        localStorage.setItem('data-settings', stringifiedSetting);
    }

    private stringifySettings(localSettingsEntity: LocalSettingsEntity): string {
        const { location, language } = localSettingsEntity;
        return JSON.stringify({
            ...localSettingsEntity,
            location: location.locationId,
            language: language.languageId,
        });
    }

    private parseSettings(localSetting: string): LocalSettingsEntity {
        const parsedSetting = JSON.parse(localSetting);
        const { location, language } = parsedSetting;
        return {
            ...parsedSetting,
            location: SupportedLocationConstant.getLocationById(location),
            language: SupportedLanguageConstant.getLanguageById(language),
        };
    }

}
