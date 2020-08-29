import { Component, OnInit } from '@angular/core';

import { LoginService } from './services/login.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.loginService.login(username, password));
  }
}
