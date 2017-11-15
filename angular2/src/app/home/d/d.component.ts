import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DComponent implements OnInit {
	dBlock=[
	
	{image:'assets/images/sun-1756322_1280.jpg'},
	{image:'assets/images/spread-1776657_1280.jpg'},
	{image:'assets/images/sheltie-1155731_1280.jpg'},
	
	];
	d1Block=[{image:'assets/images/fishing-boat-1654457_1280.jpg'},
	{image:'assets/images/sandburg-1639999_1280.jpg'},
	{image:'assets/images/rubber-duck-1401225_1280.jpg'},
	];
	d2Block=[{image:'assets/images/play-stone-1744790_1280.jpg'},
	{image:'assets/images/kelpies-1634176_1280.jpg'},
	{image:'assets/images/italy-1614931_1280.jpg'},];

  constructor() { }

  ngOnInit() {
  }

}
