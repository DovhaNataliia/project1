import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  
})
export class LoginFormComponent implements OnInit {
	public users=[
	{name:'nick',password:"1234rfd"},
	{name:'tom',password:"6hgt"},
	{name:'tanya',password:"76hr44"},
	{name:'jin',password:"yhgt567"},
	{name:'jimin',password:"ki98jn"},
	{name:'roma',password:"om890"},
	]

  constructor(private router:Router) { }

  ngOnInit() {console.log('hit');
  }
  Login(e){
  	e.preventDefault();
  	console.log(e);
  	var username=e.target.elements[0].value;
  	var password=e.target.elements[1].value;
  	let temp=0;
  	for(let i=0;i<this.users.length;i++){
  		if(username==this.users[i].name && password==this.users[i].password){temp=1;break;}
  		else {temp=0;}

  	
  	}
  	if(temp==1){this.router.navigate(['welcome']);}
  	else{this.router.navigate(['error']);}
  }

}
