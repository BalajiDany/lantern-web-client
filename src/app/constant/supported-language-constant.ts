import { SupportedLanguageEntity } from 'src/app/entity/supported-language-constant';

export class SupportedLanguageConstant {

    public static SUPPORTED_LANGUAGES: SupportedLanguageEntity[] = [
        { languageId: 'en', languageName: 'English' },
        { languageId: 'de', languageName: 'German' },
        { languageId: 'ru', languageName: 'Russian' },
        { languageId: 'es', languageName: 'Spanish' },
        { languageId: 'fr', languageName: 'French' },
        { languageId: 'ja', languageName: 'Japanese' },
        { languageId: 'pt', languageName: 'Portuguese' },
        { languageId: 'it', languageName: 'Italian' },
        { languageId: 'fa', languageName: 'Persian' },
        { languageId: 'zh', languageName: 'Chinese' },
    ];

    public static DEFAULT_SUPPORTED_LANGUAGE = SupportedLanguageConstant.SUPPORTED_LANGUAGES
        .find(language => language.languageId === 'en');

    public static getLanguageById = (languageId: string): SupportedLanguageEntity => {
        return SupportedLanguageConstant.SUPPORTED_LANGUAGES
            .find(language => language.languageId === languageId)
            || SupportedLanguageConstant.DEFAULT_SUPPORTED_LANGUAGE;
    }
}
