import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EComponent implements OnInit {
	eBlock=[
	{image:'assets/images/avatar02.jpg',title1:'David Miller',title2:'CEO',text:'itsch PBR selvage, banjo post-ironic master cleanse hoodie plaid put a bird on it dreamcatcher quinoa. Chia single-origin coffee Etsy, locavore Shoreditch twee whatever messenger.'},
	{image:'assets/images/avatar05.jpg',title1:'Milla Smith',title2:'Designer',text:'Kitsch PBR selvage, banjo post-ironic master cleanse hoodie plaid put a bird on it dreamcatcher quinoa. Chia single-origin coffee Etsy, locavore Shoreditch twee whatever messenger.'},
	{image:'assets/images/avatar03.jpg',title1:'David Miller',title2:'Designer',text:'Kitsch PBR selvage, banjo post-ironic master cleanse hoodie plaid put a bird on it dreamcatcher quinoa. Chia single-origin coffee Etsy, locavore Shoreditch twee whatever messenger'},];

  constructor() { }

  ngOnInit() {
  }

}
