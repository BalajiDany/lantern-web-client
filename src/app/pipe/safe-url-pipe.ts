import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'safeUrlPipe'
})
export class SafeUrlPipe implements PipeTransform {

    constructor(private domSanitizer: DomSanitizer) { }

    transform(url: string): any {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }

}
