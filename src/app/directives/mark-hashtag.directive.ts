import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMarkHashtag]'
})
export class MarkHashtagDirective {

  @Input('appMarkHashtag') params: any;

  constructor(private Element: ElementRef, private renderer: Renderer2) {

    setTimeout(() => {

      let text :string = Element.nativeElement.innerText;
      let regex = /(#[^\s]*)/g;

      if(this.params.color == '' || this.params.color == null) {
        let newText = text.replace(regex, "<a href='#' class='mark4'>$&</a>");
        renderer.setProperty(Element.nativeElement, 'innerHTML', newText);
      } else {
        let newText = text.replace(regex, `<a href='#' class='mark5' style='color:${this.params.color}'>$&</a>`);
        renderer.setProperty(Element.nativeElement, 'innerHTML', newText);
      }
      
    },1);
    
  }

}
