import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'plainText' })
export class PlainTextPipe implements PipeTransform {
  transform(htmlText: string): string {
    return htmlText == null
      ? null
      : htmlText.replace(/<(?:[^>=]|='[^']*'|="[^"]*"|=[^'"][^\s>]*)*>/g, '')
            .split(/\n/)
            .map(function (line) {
                return line.replace(/(&nbsp;)/g, ' ').trim();
            }).filter(function (line) {
                return line != '' && line != '&nbsp;';
            })
            .join('\n');
    }
}
