import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'EmojiToScorePipe'
})
export class EmojiToScorePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    
    if(value >= 0 && value < 5) {
      return value + ' 🤐 ';
    } else if(value >= 5 && value < 10) {
      return value + ' 😓 ';
    } else if(value >= 10 && value < 18) {
      return value + ' 😎 ';
    } else if(value >= 18 && value <= 20) {
      return value + ' 🤩 ';
    } else {
      return value + ' چه نمره ایه دیگه😐 ';
    }

  }

}
