import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculate'
})
export class CalculatePipe implements PipeTransform {

  // وقتی پایپی رو میسازید، این متد به صورت پیشفرض توش هست
  // پارامتر اولش محتویات اون متغیری هست که پایپ روش اعمال شده
  // متغیر دوم هم پارامترهایی هست که میتونیم بهش پاس بدیم

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
