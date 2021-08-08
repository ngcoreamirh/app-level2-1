import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-two',
  templateUrl: './directive-two.component.html',
  styleUrls: ['./directive-two.component.scss']
})
export class DirectiveTwoComponent implements OnInit {

  // نیازی نیست دایرکتیوی که ساختیم رو اینجا ایمپورت کنیم
  // ،وقتی دایرکتیو رو تو ماژول ایمپورت میکنیم
  // اون دایرکتیو تو تمام کامپوننت هایی که تو اون ماژول هستن قابل دسترس هست
  // و نیازی به انجام کار دیگه ای نیست

  constructor() {
    
  }

  ngOnInit() {

  }

}
