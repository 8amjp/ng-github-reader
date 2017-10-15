import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(description: string): any {
    return description.replace(/(.+)\s+\[+.*\]+/, "$1");
  }

}
