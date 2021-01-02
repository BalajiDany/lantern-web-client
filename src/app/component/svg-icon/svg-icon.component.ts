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
    EMOJI_HEART_EYES = 'emoji_heart_eyes',
    EMOJI_SUNGLASSES = 'emoji_sunglasses',
    EMOJI_EXPRESSIONLESS = 'emoji_expressionless',

    LINK = 'link',
    SEARCH = 'search',
    GEAR_FILL = 'gear_fill',
    PLAY_BTN_FILL = 'play_btn_fill',
    BROADCAST = 'broadcast',
    INBOX_FILL= 'inbox_fill',
    INBOXES_FILL = 'inboxes_fill',
    LIGHTNING_FILL = 'lightning_fill',
    CLOUD_ARROW_DOWN_FILL = 'cloud_arrow_down_fill',
}
