import { Component, OnInit, Input, Output ,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  
})
export class PaymentComponent implements OnInit {
	@Input() booking:object;
  
  @Output() paymentSaved=new EventEmitter();
  @Output() allSaved=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  savepayment() {
    this.paymentSaved.emit(this.booking);
  }
  finish()
  {
    this.allSaved.emit(this.booking);
  }

}
