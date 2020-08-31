import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoginService } from '../../../../auth/components/login/services/login.service';


@Injectable()
export class DepartmentCreateService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  createDepartment(name, description, image, main_departments) {
    const httpOptions = {
      headers: new HttpHeaders({
//         'Content-Type': 'multipart/form-data',
        'Authorization': 'JWT ' + this.loginService.getToken()
      })
    };

    const formData = new FormData();
    formData.append('name', name)
    if (description !== null && description !== undefined) {
      formData.append('description', description);
    }
    if (image !== null && image !== undefined) {
      formData.append('image', image, image.name);
    }
    if (main_departments !== null && main_departments !== undefined) {
      formData.append('main_departments', main_departments);
    }

    return this.http.post('api/v1/department/create/', formData, httpOptions);
  }

}
