import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtoPipe'
})
export class FiltoPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
