import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PairsPipe } from 'src/app/pipe/pairs-pipe';
import { SafeUrlPipe } from 'src/app/pipe/safe-url-pipe';
import { StringReplacePipe } from 'src/app/pipe/string-replace.pipe';
import { ComponentModule } from 'src/app/component/component.module';
import { HotkeysManagerService } from 'src/app/service/hotkeys-manager.service';
import { SearchTypeProviderService } from 'src/app/service/search-type-provider.service';
import { EngineConfigurationService } from 'src/app/service/engine-configuration.service';
import { SearchEngineCoreService } from 'src/app/service/search-engine/search-engine-core.service';
import { SearchEngineCodeService } from 'src/app/service/search-engine/search-engine-code.service';
import { SearchEngineVideoService } from 'src/app/service/search-engine/search-engine-video.service';
import { SearchEngineTorrentService } from 'src/app/service/search-engine/search-engine-torrent.search';
import { SearchEngineGeneralService } from 'src/app/service/search-engine/search-engine-general.service';

import { SearchPageComponent } from './search-page.component';
import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchErrorComponent } from './component/search-error/search-error.component';
import { SearchFieldComponent } from './component/search-field/search-field.component';
import { SearchResultComponent } from './result-panel/search-result/search-result.component';
import { SearchTypesTabComponent } from './component/search-types-tab/search-types-tab.component';
import { SearchInprogressComponent } from './component/search-inprogress/search-inprogress.component';
import { SearchComingSoonComponent } from './component/search-coming-soon/search-coming-soon.component';
import { SearchEmptyQueryComponent } from './component/search-empty-query/search-empty-query.component';
import { LocalSettingModalComponent } from '../modal/local-setting-modal/local-setting-modal.component';
import { SearchEmptyResultComponent } from './component/search-empty-result/search-empty-result.component';
import { LocationSettingModalComponent } from '../modal/location-setting-modal/location-setting-modal.component';
import { LanguageSettingModalComponent } from '../modal/language-setting-modal/language-setting-modal.component';
import { SearchFloatingButtonComponent } from './result-panel/search-floating-button/search-floating-button.component';
import { SearchResultCodeComponent } from './result-panel/search-result/search-result-code/search-result-code.component';
import { SearchResultCardTitleComponent } from './component/search-result-card-title/search-result-card-title.component';
import { SearchResultVideoComponent } from './result-panel/search-result/search-result-video/search-result-video.component';
import { SearchResultCardEnginesComponent } from './component/search-result-card-engines/search-result-card-engines.component';
import { SearchResultGeneralComponent } from './result-panel/search-result/search-result-general/search-result-general.component';
import { SearchResultTorrentComponent } from './result-panel/search-result/search-result-torrent/search-result-torrent.component';

@NgModule({
    declarations: [
        PairsPipe,
        SafeUrlPipe,
        StringReplacePipe,
        LocalSettingModalComponent,
        LocationSettingModalComponent,
        LanguageSettingModalComponent,

        SearchPageComponent,
        SearchFieldComponent,
        SearchTypesTabComponent,
        SearchFloatingButtonComponent,

        SearchResultComponent,
        SearchResultCodeComponent,
        SearchResultVideoComponent,
        SearchResultTorrentComponent,
        SearchResultGeneralComponent,

        SearchErrorComponent,
        SearchComingSoonComponent,
        SearchEmptyQueryComponent,
        SearchInprogressComponent,
        SearchEmptyResultComponent,
        SearchResultCardTitleComponent,
        SearchResultCardEnginesComponent,
    ],
    imports: [
        NgbModule,
        FormsModule,
        CommonModule,
        ComponentModule,
        ReactiveFormsModule,
        SearchPageRoutingModule,
    ],
    providers: [
        HotkeysManagerService,
        SearchEngineCoreService,
        SearchEngineCodeService,
        SearchEngineVideoService,
        SearchTypeProviderService,
        EngineConfigurationService,
        SearchEngineGeneralService,
        SearchEngineTorrentService,
    ]
})
export class SearchPageModule { }
