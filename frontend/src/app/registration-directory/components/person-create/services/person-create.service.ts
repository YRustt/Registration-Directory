import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoginService } from '../../../../auth/components/login/services/login.service';


@Injectable()
export class PersonCreateService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  createPerson(surname, name, patronymic, date_of_birth, address, home_phone, mobile_phone, email, avatar, department) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'JWT ' + this.loginService.getToken()
      })
    }

    const formData = new FormData();
    formData.append('surname', surname);
    formData.append('name', name);
    formData.append('patronymic', patronymic);
    if (date_of_birth !== null && date_of_birth !== undefined) {
      formData.append('date_of_birth', date_of_birth);
    }
    if (address !== null && address !== undefined) {
      formData.append('address', address);
    }
    if (home_phone !== null && home_phone !== undefined) {
      formData.append('home_phone', home_phone);
    }
    if (mobile_phone !== null && mobile_phone !== undefined) {
      formData.append('mobile_phone', mobile_phone);
    }
    if (email !== null && email !== undefined) {
      formData.append('email', email);
    }
    if (avatar !== null && avatar !== undefined) {
      formData.append('avatar', avatar, avatar.name);
    }
    formData.append("department", department);

    return this.http.post('api/v1/person/create/', formData, httpOptions);
  }

}
