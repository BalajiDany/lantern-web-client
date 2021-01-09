import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-logo',
    templateUrl: './app-logo.component.html',
    styleUrls: ['./app-logo.component.css']
})
export class LogoComponent implements OnInit {

    public logo = environment.engineName;
    public version = environment.engineVersion;

    constructor() { }

    ngOnInit(): void {
    }

}
