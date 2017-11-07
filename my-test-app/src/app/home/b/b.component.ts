import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
