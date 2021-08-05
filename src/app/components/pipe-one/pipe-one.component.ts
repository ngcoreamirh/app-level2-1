import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-one',
  templateUrl: './pipe-one.component.html',
  styleUrls: ['./pipe-one.component.scss']
})
export class PipeOneComponent implements OnInit {

  date: any;
  json: any;

  constructor() {

  }

  ngOnInit() {
    this.date = new Date();
    this.json = {
      "array": [1,2,3],
      "boolean": true,
      "color": "gold",
    }
  }

}
