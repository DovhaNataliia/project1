import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {DatePickerComponent} from 'ng2-date-picker';
@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  
})

export class StepsComponent implements OnInit {
  public step=1;
  public booking: object={
  	bookingday:'',
    people:'',
    bookingtime:'',
     fname:'',
     lname:'',
     email:'',
     phone:'',
     country:'',
     city:'',
     address:'',
     zip:'',
    cardnumber:'',
    month:'',
    year:'',
    cvc:'',
    step1saved:false,
    step2saved:false,
    step3saved:false
  };
  constructor() { }

  ngOnInit() {
  }
  gotoPage(isNext){
    this.step+=(isNext)?1:-1;
    }
    savebooking(booking: object)
    {
    this.step++;
    this.booking = booking;
    this.booking["step1saved"]=true;
     console.log(this.booking);
    }
    savepersonal(booking: object)
    {
    this.step++;
    this.booking = booking;
    this.booking["step2saved"]=true;
     console.log(this.booking);
    }
    savepayment(booking: object)
    {
    this.booking = booking;
    this.booking["step3saved"]=true;
     console.log(this.booking);
    }
    finish(booking: object)
    {
     this.step++;
     console.log(this.booking);
    }

}
