import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { LoginService } from './login.service';


@Injectable()
export class IsAdminService {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate() {
    return this.loginService.isAdmin();
  }
}
