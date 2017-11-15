import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BComponent implements OnInit {
	bBlock=[
	
	{image:'assets/images/02_a.fw_-1.png', title:'A Real Design'},
	{image:'assets/images/3_a.fw_-1.png', title:'Breath Colour'},
	{image:'assets/images/4_a.fw_-1.png', title:'Project'},
	{image:'assets/images/6_a.fw_-1.png', title:'Studio'},
	{image:'assets/images/5_a.fw_-1.png', title:'Campaign'},
	

	];

  constructor() { }

  ngOnInit() {
  }

}
