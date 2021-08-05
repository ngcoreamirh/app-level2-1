import { Component, ElementRef, HostBinding, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-binding-four',
  templateUrl: './binding-four.component.html',
  styleUrls: ['./binding-four.component.scss']
})
export class BindingFourComponent implements OnInit {

  @ViewChild("PTag") PTag: ElementRef<HTMLParagraphElement>;
  @ViewChild("ColorInp") ColorInp: ElementRef<HTMLInputElement>;
  @ViewChild("NumberInp") NumberInp: ElementRef<HTMLInputElement>;
  
  @ViewChild("PTag2") PTag2: ElementRef<HTMLParagraphElement>;
  @ViewChild("ColorInp2") ColorInp2: ElementRef<HTMLInputElement>;
  @ViewChild("NumberInp2") NumberInp2: ElementRef<HTMLInputElement>;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {

  }

  changeColor() {
    let color = this.ColorInp.nativeElement.value;
    let fontSize = this.NumberInp.nativeElement.value;
    this.PTag.nativeElement.style.color = color;
    this.PTag.nativeElement.style.fontSize = fontSize + "px";
  }

  changeColor2() {
    let color = this.ColorInp2.nativeElement.value;
    let fontSize = this.NumberInp2.nativeElement.value + "px";
    this.renderer.setStyle(this.PTag2.nativeElement,"color",color);
    this.renderer.setStyle(this.PTag2.nativeElement,"font-size",fontSize);
  }

  changeColor3() {
    let colorInp = <HTMLInputElement>document.getElementById("ColorInp3");
    let fontSizeInp = <HTMLInputElement>document.getElementById("NumberInp3");
    document.getElementById("PTag3").style.color = colorInp.value;
    document.getElementById("PTag3").style.fontSize = fontSizeInp.value + "px";
  }

}
