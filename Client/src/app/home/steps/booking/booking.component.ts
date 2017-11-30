import { Component, OnInit ,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  
})
export class BookingComponent implements OnInit {

@Input() booking:object;
  
  @Output() bookingSaved=new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }
 
  savebooking() {
    this.bookingSaved.emit(this.booking);
  }

}
