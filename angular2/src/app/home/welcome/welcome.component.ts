import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
