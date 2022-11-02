import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, term: any): any {
    if (term == null) {
      return value;
    } else {
      return value.filter(
        (item: any) =>
          item.name.includes(term) || item.description.includes(term)
      );
    }
  }
}
