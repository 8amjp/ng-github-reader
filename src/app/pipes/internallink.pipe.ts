import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'internallink'
})
export class InternallinkPipe implements PipeTransform {

  transform(value: string): string {
    let div = document.createElement('div');
    div.innerHTML = value;
    [].forEach.call(div.getElementsByTagName('a'), (a) => {
      a.removeAttribute('href');
      a.setAttribute('routerLink', '/');
    });
    return div.innerHTML;
  }

}
