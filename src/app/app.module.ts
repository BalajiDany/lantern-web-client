import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        NgbModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
