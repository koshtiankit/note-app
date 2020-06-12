import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './common.service';

declare var ENDPOINTS;

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  constructor(public router: Router, private commonService: CommonService) {}

  /**
   * login request API
   */
  public doLogin(data) {
    const { email, password } = data;
    let response = {
      isSuccess: true,
      Message: 'Success',
    };

    response.isSuccess = false;
    response.Message = 'Invalid Email/Password try again';

    return response;

    //return (response.status = 204);
    //response.Message = 'Invalid Email/Password try again';
  }

  /**
   * Match passwords
   * @param data - object
   * @returns true or false - if not match
   */
  matchPasswords(data) {
    return data.confirmPassword !== data.Password ? false : true;
  }

  saveUserInfoToLocalStorage(userInfo) {
    try {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(userInfo));
    } catch (err) {
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  }

  logout() {
    this.clearLocalStorage();
    this.router.navigate(['./login'], { replaceUrl: true });
  }

  clearLocalStorage() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('menuList');
    localStorage.removeItem('dropDownItems');
  }
}
