import { Component, OnInit } from '@angular/core';
import { User } from '../../../class/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  
  compTitle = "Login";

  prop_user = new User("","")
  ngOnInit() {
  }

}