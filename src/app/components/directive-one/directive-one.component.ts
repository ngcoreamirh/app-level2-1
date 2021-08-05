import { Component, OnInit } from '@angular/core';
import { LevelOfEducationEnum } from '../../models/enums';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-directive-one',
  templateUrl: './directive-one.component.html',
  styleUrls: ['./directive-one.component.scss']
})
export class DirectiveOneComponent implements OnInit {

  maritalStatusSelected: string = "";
  citySelected: string = "";
  dateOfMarriage : string = "";
  soldieryStatusList: string[];
  users: Person[]; 

  constructor() {
    
  }

  ngOnInit() {

    this.soldieryStatusList = ["مشمول","در حال خدمت","معافیت تحصیلی","معافیت پزشکی"];

    this.users = [
      {fullName: 'امیرحسین قاسمی',levelOfEducation: LevelOfEducationEnum.Bachelor, phone:'09379299611'},
      {fullName: 'عرفان کمالی',levelOfEducation: LevelOfEducationEnum.Bachelor, phone:'092101010101'},
      {fullName: 'زهرا رضایی',levelOfEducation: LevelOfEducationEnum.PHD, phone:'092102020202'},
      {fullName: 'شهاب رضایی',levelOfEducation: LevelOfEducationEnum.Masters, phone:'092103030303'},
    ];
  
  }

}
