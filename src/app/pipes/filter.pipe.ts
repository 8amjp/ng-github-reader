import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[]): any[] {
    if (!items) return items;
    return items.filter(item => {
      return item.has_pages == true && item.description;
    });
  }

}
