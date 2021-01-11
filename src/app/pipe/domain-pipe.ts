import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'domainPipe',
})
export class DomainPipe implements PipeTransform {
    transform(url: string): string {
        if (url) {
            const { hostname } = new URL(url);
            if (hostname) {
                return hostname;
            }
        }
        return url;
    }
}
