import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { LoginService } from './login.service';


@Injectable()
export class GuardService {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate() {
    if (!this.loginService.isLogged()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
