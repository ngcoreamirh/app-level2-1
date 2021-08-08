import { Component, OnInit } from '@angular/core';
import { LevelOfEducationEnum } from '../../models/enums';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-directive-one',
  templateUrl: './directive-one.component.html',
  styleUrls: ['./directive-one.component.scss']
})
export class DirectiveOneComponent implements OnInit {

  // مقادیری رو که میخواهیم تو 
  // ngModel استفاده کنیم مساوی خالی قرار میدیم تا به ارور نخوریم
  maritalStatusSelected: string = "";
  citySelected: string = "";
  dateOfMarriage : string = "";

  soldieryStatusList: string[];
  users: Person[]; // یه آرایه از مدل افراد


  constructor() {
    
  }

  ngOnInit() {

    this.soldieryStatusList = ["مشمول","در حال خدمت","معافیت تحصیلی","معافیت پزشکی"];

    // به این شکل یه آرایه از مدلمون رو میتونیم مقداردهی کنیم
    // میتونستیم هم همون بالا موقع تعریف مقدار هم بدیم ولی اینطور حرفه ای تره
    // به طرز استفاده از اینام ها و نحوه مقداردهیشون هم دقت کنید
    this.users = [
      {fullName: 'امیرحسین قاسمی', levelOfEducation: LevelOfEducationEnum.Bachelor, phone:'09379299611'},
      {fullName: 'عرفان کمالی', levelOfEducation: LevelOfEducationEnum.Bachelor, phone:'092101010101'},
      {fullName: 'زهرا رضایی', levelOfEducation: LevelOfEducationEnum.PHD, phone:'092102020202'},
      {fullName: 'شهاب رضایی', levelOfEducation: LevelOfEducationEnum.Masters, phone:'092103030303'},
    ];
  
  }

}
