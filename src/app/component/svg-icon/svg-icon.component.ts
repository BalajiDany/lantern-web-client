import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-svg-icon',
    templateUrl: './svg-icon.component.html',
    styleUrls: ['./svg-icon.component.css']
})
export class SvgIconComponent {

    @Input() icon: SvgIcons;
    @Input() size = 1.2;

    public SvgIconsEnum = SvgIcons;
}

export enum SvgIcons {
    EMOJI_SMILE = 'emoji_smile',
    EMOJI_FROWN = 'emoji_frown',
    EMOJI_DIZZY = 'emoji_dizzy',
    EMOJI_ANGRY = 'emoji_angry',
    EMOJI_LAUGHING = 'emoji_laughing',
    EMOJI_EXPRESSIONLESS = 'emoji_expressionless',
    EMOJI_HEART_EYES = 'emoji_heart_eyes',

    SEARCH = 'search',
    GEAR_FILL = 'gear_fill',
}
