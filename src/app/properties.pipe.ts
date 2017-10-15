import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'properties'
})
export class PropertiesPipe implements PipeTransform {

  transform(description: string): any {
    return description.replace(/.+\s+\[(.+)\]/, "$1");
  }

}
