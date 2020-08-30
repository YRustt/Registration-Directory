import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    this.http.post('api/v1/auth/login/', {'username': username, 'password': password}).subscribe((data) => {
      localStorage.setItem('token', data['token']);
      this.router.navigate(['']);
    })
  }

  isLogged() {
    const token = localStorage.getItem('token');
    const expire_time = (JSON.parse(atob(token.split('.') [1]))).exp;

    return (Math.floor((new Date).getTime() / 1000)) < expire_time;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
