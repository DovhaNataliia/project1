import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
