import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculate'
})
export class CalculatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    let res;
    args.forEach(arg => {
      if(arg == 'sqrt') {
        res = Math.sqrt(value);
      } else if (arg == 'abs') {
        res = Math.abs(value);
      } else {
        res = value;
      }
    });
    return res;
    
  }

}
