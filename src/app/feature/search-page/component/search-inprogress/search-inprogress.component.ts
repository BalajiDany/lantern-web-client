import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-inprogress',
    templateUrl: './search-inprogress.component.html',
    styleUrls: ['./search-inprogress.component.css']
})
export class SearchInprogressComponent implements OnInit, AfterViewInit {

    constructor() { }

    public icon = 'emoji_smile';

    private icons = [
        'emoji_smile',
        'emoji_frown',
        'emoji_dizzy',
        'emoji_angry',
        'emoji_laughing',
        'emoji_expressionless',
        'emoji_heart_eyes',
    ]

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        setInterval(() => {
            this.icon = this.getRandomIcon();
        }, 150);
    }

    private getRandomIcon(): string {
        return this.icons[Math.floor(Math.random() * this.icons.length)];
    }

}
