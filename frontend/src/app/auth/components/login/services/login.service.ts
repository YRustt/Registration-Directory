import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    this.http.post('api/v1/auth/login/', {'username': username, 'password': password}).subscribe((data) => {
      localStorage.setItem('token', data['token']);
    })
  }

  isLogged() {
    return localStorage.getItem('token') !== undefined;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
