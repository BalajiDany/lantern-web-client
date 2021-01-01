import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SafeUrlPipe } from 'src/app/pipe/safe-url-pipe';
import { StringReplacePipe } from 'src/app/pipe/string-replace.pipe';
import { ComponentModule } from 'src/app/component/component.module';
import { HotkeysManagerService } from 'src/app/service/hotkeys-manager.service';
import { SearchEngineCoreService } from 'src/app/service/search-engine-core.service';
import { SearchEngineCodeService } from 'src/app/service/search-engine-code.service';
import { SearchEngineVideoService } from 'src/app/service/search-engine-video.service';
import { SearchTypeProviderService } from 'src/app/service/search-type-provider.service';
import { SearchEngineTorrentService } from 'src/app/service/search-engine-torrent.search';
import { SearchEngineGeneralService } from 'src/app/service/search-engine-general.service';

import { SearchPageComponent } from './search-page.component';
import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchErrorComponent } from './component/search-error/search-error.component';
import { SearchFieldComponent } from './search-panel/search-field/search-field.component';
import { SearchResultComponent } from './result-panel/search-result/search-result.component';
import { SearchTypesTabComponent } from './component/search-types-tab/search-types-tab.component';
import { SearchInprogressComponent } from './component/search-inprogress/search-inprogress.component';
import { SearchEmptyQueryComponent } from './component/search-empty-query/search-empty-query.component';
import { SearchEmptyResultComponent } from './component/search-empty-result/search-empty-result.component';
import { SearchFloatingButtonComponent } from './result-panel/search-floating-button/search-floating-button.component';
import { SearchResultCodeComponent } from './result-panel/search-result/search-result-code/search-result-code.component';
import { SearchResultCardTitleComponent } from './component/search-result-card-title/search-result-card-title.component';
import { SearchResultVideoComponent } from './result-panel/search-result/search-result-video/search-result-video.component';
import { SearchResultCardEnginesComponent } from './component/search-result-card-engines/search-result-card-engines.component';
import { SearchResultGeneralComponent } from './result-panel/search-result/search-result-general/search-result-general.component';
import { SearchResultTorrentComponent } from './result-panel/search-result/search-result-torrent/search-result-torrent.component';

@NgModule({
    declarations: [
        StringReplacePipe,
        SafeUrlPipe,

        SearchPageComponent,
        SearchFieldComponent,
        SearchTypesTabComponent,
        SearchFloatingButtonComponent,

        SearchResultComponent,
        SearchResultGeneralComponent,
        SearchResultCodeComponent,
        SearchResultTorrentComponent,
        SearchResultVideoComponent,

        SearchErrorComponent,
        SearchEmptyQueryComponent,
        SearchEmptyResultComponent,
        SearchInprogressComponent,
        SearchResultCardTitleComponent,
        SearchResultCardEnginesComponent,
    ],
    imports: [
        SearchPageRoutingModule,
        ComponentModule,
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    providers: [
        SearchEngineCoreService,
        SearchEngineCodeService,
        SearchEngineVideoService,
        SearchEngineGeneralService,
        SearchEngineTorrentService,
        SearchTypeProviderService,
        HotkeysManagerService,
    ]
})
export class SearchPageModule { }
