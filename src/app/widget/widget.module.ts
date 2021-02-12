import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineStatusComponent } from './engine-status/engine-status.component';
import { SearchCountComponent } from './search-count/search-count.component';
import { SearchSuggestionComponent } from './search-suggestion/search-suggestion.component';



@NgModule({
    declarations: [
        SearchCountComponent,
        EngineStatusComponent,
        SearchSuggestionComponent,
    ],
    exports: [
        SearchCountComponent,
        EngineStatusComponent,
        SearchSuggestionComponent,
    ],
    imports: [
        CommonModule
    ],
})
export class WidgetModule { }
