import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityString'
})
export class PriorityStringPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    switch (value) {
      case 0:
        return 'bassa';
      case 1:
        return 'media';
      case 2:
        return 'alta';
      default:
        return 'molto alta';
    }
  }

}
