import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-g',
  templateUrl: './g.component.html',
  styleUrls: ['./g.component.scss'],
  
})
export class GComponent implements OnInit {
	gBlock=[
	{image:'assets/images/10.png',title1:'26,412',title2:'PAGE VIEWS'},
	{image:'assets/images/20.png',title1:'15,362',title2:'COFFEE CONSUMED'},
	{image:'assets/images/30.png',title1:'21,568',title2:'PROJECT FINISHED'},
	{image:'assets/images/40.png',title1:'26,854',title2:'PIZZAS EATEN'},

	];

  constructor() { }

  ngOnInit() {
  }

}
