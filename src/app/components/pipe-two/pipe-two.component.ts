import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-two',
  templateUrl: './pipe-two.component.html',
  styleUrls: ['./pipe-two.component.scss']
})
export class PipeTwoComponent implements OnInit {

  // نیازی نیست پایپی که ساختیم رو اینجا ایمپورت کنیم
  // ،وقتی پایپی رو تو ماژول ایمپورت میکنیم
  // اون پایپ تو تمام کامپوننت هایی که تو اون ماژول هستن قابل دسترس هست
  // و نیازی به انجام کار دیگه ای نیست

  constructor() {
    
  }

  ngOnInit() {

  }

}
