import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, maxChar: number) {
    if (value)
      return value.substring(0, maxChar) + '...';
  }

}
