import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StringReplacePipe } from 'src/app/pipe/string-replace.pipe';
import { HotkeysManagerService } from 'src/app/service/hotkeys-manager.service';
import { SearchEngineCoreService } from 'src/app/service/search-engine-core.service';
import { SearchTypeProviderService } from 'src/app/service/search-type-provider.service';
import { SearchEngineGeneralService } from 'src/app/service/search-engine-general.service';
import { ComponentModule as BaseComponentModule } from 'src/app/component/component.module';

import { SearchPageComponent } from './search-page.component';
import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchFieldComponent } from './search-field/search-field.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchTypesTabComponent } from './search-types-tab/search-types-tab.component';
import { SearchFloatingButtonComponent } from './search-floating-button/search-floating-button.component';
import { SearchQueryEmptyComponent } from './search-result/search-query-empty/search-query-empty.component';
import { SearchResultEmptyComponent } from './search-result/search-result-empty/search-result-empty.component';

@NgModule({
    declarations: [
        SearchPageComponent,
        SearchFieldComponent,
        SearchTypesTabComponent,
        SearchFloatingButtonComponent,
        StringReplacePipe,
        SearchResultComponent,
        SearchResultEmptyComponent,
        SearchQueryEmptyComponent,
    ],
    imports: [
        SearchPageRoutingModule,
        BaseComponentModule,
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
