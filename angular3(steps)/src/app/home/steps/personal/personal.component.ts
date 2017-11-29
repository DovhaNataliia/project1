import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  
})
export class PersonalComponent implements OnInit {
	 @Input() booking:object;
 @Output() personalSaved=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
savepersonal() {
    this.personalSaved.emit(this.booking);
  }
}
