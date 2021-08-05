import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMarkText]'
})
export class MarkTextDirective {
  
  constructor(private Element: ElementRef, private renderer: Renderer2) {
    
    renderer.setStyle(Element.nativeElement,'background-color', 'yellow');
    renderer.setStyle(Element.nativeElement,'color', 'black');
    renderer.setStyle(Element.nativeElement,'padding', '3px 7px');
    renderer.setStyle(Element.nativeElement,'border-radius', '9px');

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.Element.nativeElement, 'background-color', 'orange');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.Element.nativeElement, 'background-color', 'yellow');
  }

}
