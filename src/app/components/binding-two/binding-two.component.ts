import { Component, OnInit } from '@angular/core';
import { LevelOfEducationEnum } from '../../models/enums';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-binding-two',
  templateUrl: './binding-two.component.html',
  styleUrls: ['./binding-two.component.scss']
})
export class BindingTwoComponent implements OnInit {

  // ،چون تو صفحه تمپلیت یا همون اچ تی ام المون  از این شی استفاده کردیم
  // اگر شی رو نیو نکنیم بهمون خطا میده، چون نمیتونه پراپرتی های داخل شی رو بشناسه
  person: Person = new Person();
  levelOfEducationEnum = LevelOfEducationEnum;

  constructor() {

  }

  ngOnInit() {

  }

  showAlert(message: string) {
    alert(message);
  }
  
  onKeypress(inputEvent) {
    console.log(inputEvent.target.value);
  }

  onChange(inputElement: HTMLInputElement) {
    console.log(inputElement.value);
  }
  
  onFocus(inputElement: HTMLInputElement) {
    inputElement.setAttribute("style","border: 1px solid yellow");
  }

  onBlur(inputElement: HTMLInputElement) {
    inputElement.removeAttribute("style");
  }

  register(fullName: HTMLInputElement, phone: HTMLInputElement, levelOfEducation: HTMLSelectElement) { 
    this.person = {
      fullName: fullName.value,
      phone: phone.value,
      levelOfEducation: LevelOfEducationEnum[levelOfEducation.value]
    };
  }
  
}
