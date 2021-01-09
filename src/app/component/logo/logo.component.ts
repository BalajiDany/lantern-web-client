import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

    // TODO Centralize the logo (Including in index.html)
    public logo = environment.engineName;
    public version = environment.engineVersion;

    constructor() { }

    ngOnInit(): void {
    }

}
