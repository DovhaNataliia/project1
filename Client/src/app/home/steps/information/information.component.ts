import { Component, OnInit, Input  } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  
})
export class InformationComponent implements OnInit {
	 @Input() booking:object;

  constructor() { }

  ngOnInit() {
  }

}
