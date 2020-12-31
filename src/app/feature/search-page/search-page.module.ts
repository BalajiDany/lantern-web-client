import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StringReplacePipe } from 'src/app/pipe/string-replace.pipe';
import { HotkeysManagerService } from 'src/app/service/hotkeys-manager.service';
import { SearchEngineCoreService } from 'src/app/service/search-engine-core.service';
import { SearchTypeProviderService } from 'src/app/service/search-type-provider.service';
import { SearchEngineGeneralService } from 'src/app/service/search-engine-general.service';
import { ComponentModule } from 'src/app/component/component.module';

import { SearchPageComponent } from './search-page.component';
import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchFieldComponent } from './search-panel/search-field/search-field.component';
import { SearchResultComponent } from './result-panel/search-result/search-result.component';
import { SearchTypesTabComponent } from './component/search-types-tab/search-types-tab.component';
import { SearchFloatingButtonComponent } from './result-panel/search-floating-button/search-floating-button.component';
import { SearchResultGeneralComponent } from './result-panel/search-result/search-result-general/search-result-general.component';
import { SearchResultCodeComponent } from './result-panel/search-result/search-result-code/search-result-code.component';
import { SearchResultTorrentComponent } from './result-panel/search-result/search-result-torrent/search-result-torrent.component';
import { SearchResultVideoComponent } from './result-panel/search-result/search-result-video/search-result-video.component';
import { SearchErrorComponent } from './component/search-error/search-error.component';
import { SearchEmptyQueryComponent } from './component/search-empty-query/search-empty-query.component';
import { SearchEmptyResultComponent } from './component/search-empty-result/search-empty-result.component';
import { SearchInprogressComponent } from './component/search-inprogress/search-inprogress.component';

@NgModule({
    declarations: [
        StringReplacePipe,

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
        SearchEngineGeneralService,
        SearchTypeProviderService,
        HotkeysManagerService,
    ]
})
export class SearchPageModule { }
