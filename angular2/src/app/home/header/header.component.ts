import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
	headerBlock=[ 
	{image:'assets/images/1.png'},
	{image:'assets/images/2.png'},
	{image:'assets/images/3.png'},
	{image:'assets/images/4.png'},
	{image:'assets/images/5.png'},
	{image:'assets/images/6.png'},
	{image:'assets/images/7.png'},
	];
	header1Block=[
	
	{href:'http://newthemes.net/artim/headers',title:'Headers'},
	{href:'http://newthemes.net/artim/about-us/',title:'About Us'},
	{href:'http://newthemes.net/artim/template_services/',title:'Services'},
	{href:'http://newthemes.net/artim/home-corporate/#',title:'Portfolio'},
	{href:'http://newthemes.net/artim/elements/',title:'Elements'},
	{href:'http://newthemes.net/artim/shop/',title:'Shop'},
	{href:'http://newthemes.net/artim/right-sidebar/',title:'Blog'},
	{href:'http://newthemes.net/artim/features/',title:'Features'},
	{href:'http://newthemes.net/artim/home-corporate/#',title:'Sliders'},
	{href:'http://newthemes.net/artim/contact/',title:'Contact'},];

  constructor() { }

  ngOnInit() {
  }

}
