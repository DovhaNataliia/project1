import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class YComponent implements OnInit {
	yBlock=[
	{href:'http://newthemes.net/artim/dissuade-ecstatic/',title:'Dissuade Ecstatic'},
	{href:'http://newthemes.net/artim/properly-saw/',title:'Properly Saw'},
	{href:'http://newthemes.net/artim/laughter-endeavor/',title:'Laughter Endeavor'},
	{href:'http://newthemes.net/artim/vanity-excuse/',title:'Vanity Excuse'},
	{href:'http://newthemes.net/artim/sufficient-understood/',title:'Sufficient Understood'},
	];
	y1Block=[
	{image:'assets/images/board-1614646_1280.jpg'},
	{image:'assets/images/boot-1620452_1280.jpg'},
	{image:'assets/images/chess-1483735_1280.jpg'},];
	y2Block=[
	{image:'assets/images/cucumbers-1776752_1280.jpg'},
	{image:'assets/images/different-nationalities-1743392_1280.jpg'},
	{image:'assets/images/egg-1600890_1280.jpg'},
	{image:'assets/images/fall-1432252_1280.jpg'},];
	y3Block=[
	{image:'assets/images/fishing-1572408_1280.jpg'},
	{image:'assets/images/fishing-boat-1654446_1280.jpg'},
	{image:'assets/images/frogs-1610563_1280.jpg'},];

  constructor() { }

  ngOnInit() {
  }

}
