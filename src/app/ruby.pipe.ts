import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ruby'
})
export class RubyPipe implements PipeTransform {

  transform(article: string): string {
    return article
      .replace(/｜《(.+?)》/g,    '《$1》')
      .replace(/｜(.+?)《(.+?)》/g,    '<ruby>$1<rt>$2</rt></ruby>')
      .replace(/([ヶ一-龠]+)《(.+?)》/g, '<ruby>$1<rt>$2</rt></ruby>');
  }

}
