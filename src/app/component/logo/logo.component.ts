import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

    // TODO Centralize the logo (Including in index.html)
    public logo = 'Eniac';

    constructor() { }

    ngOnInit(): void {
    }

}
