import { SupportedLanguageEntity } from './supported-language-constant';
import { SupportedLocationEntity } from './supported-location-entity';

export interface LocalSettingsEntity {
    location?: SupportedLocationEntity;
    language?: SupportedLanguageEntity;
    pageNo?: number;
}

export interface GlobalSettingsEntity {
    language?: string;
    disabledEngines?: string[];
}
