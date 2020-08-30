import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoginService } from '../../../../auth/components/login/services/login.service';


@Injectable()
export class DepartmentsService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this.loginService.getToken()
      })
    };
    return this.http.get('api/v1/departments/', httpOptions);
  }

}
