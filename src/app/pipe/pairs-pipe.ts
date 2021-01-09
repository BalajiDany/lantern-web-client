import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pairsPipe',
})
export class PairsPipe implements PipeTransform {

    transform(array: [] = [], columnCount: number = 2): any {
        const r = array.reduce((result, item, index) => (
            index % columnCount ? result : [...result, array.slice(index, index + columnCount)]
        ), []);
        return r;
    }

}
