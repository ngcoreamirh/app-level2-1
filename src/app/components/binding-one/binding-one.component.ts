import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-one',
  templateUrl: './binding-one.component.html',
  styleUrls: ['./binding-one.component.scss']
})
export class BindingOneComponent implements OnInit {

  name: string;
  MelliCode: string;
  isMarried: boolean;

  phoneNumber: string;
  address: string;

  constructor() { 

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.name = "مصطفی";
    this.MelliCode = "0056325871"
    this.isMarried = true;

    this.phoneNumber = "09";
  }

}
