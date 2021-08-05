import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-three',
  templateUrl: './binding-three.component.html',
  styleUrls: ['./binding-three.component.scss']
})
export class BindingThreeComponent implements OnInit {

  imgFolderUrl: string = "/assets/images/"
  imgFullUrl: string = "/assets/images/img1.jpg";
  borderStyle: string = "border-color: yellow"
  isToggle: boolean = false;
  inputTypeList: string[] = ["password","text"];
  inputType: string;
  inputValue: string = "amirh 1376";

  constructor() {

  }

  ngOnInit() {
    this.intervalInputTypeChanging(); 
  }

  toggleSwitch() {
    this.isToggle ? this.isToggle = false : this.isToggle = true;
    // خط بالا معادل چند خط پایینه
    /* if(this.isToggle === true) { 
      this.isToggle = false;
    } else {
      this.isToggle = true;
    } */
  }

  setColorTheme(ColorTheme) {
    return ColorTheme == 'dark' ? 'dark' : 'light';
    // خط بالا معادل چند خط پایینه
    /* if(ColorTheme == 'dark') {
      return 'dark';
    } else {
      return 'light'
    } */
  }

  intervalInputTypeChanging() {
    let counter = 0;
    setInterval(()=>{
      if(counter == this.inputTypeList.length) {
        counter = 0;
      } else {
        this.inputType = this.inputTypeList[counter];
        counter++;
      }
    },2000)
  }

}
