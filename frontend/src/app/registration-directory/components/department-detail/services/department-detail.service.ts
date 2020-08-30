import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { LoginService } from '../../../../auth/components/login/services/login.service';


@Injectable()
export class DepartmentDetailService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getDepartments(department_id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this.loginService.getToken()
      }),
      params: new HttpParams().set('main_department', department_id)
    };
    return this.http.get('api/v1/departments/', httpOptions);
  }

  getDetail(department_id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this.loginService.getToken()
      })
    };
    return this.http.get('api/v1/department/' + department_id + '/', httpOptions);
  }
}
