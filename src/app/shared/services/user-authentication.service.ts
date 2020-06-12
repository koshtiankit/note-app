import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './common.service';

declare var ENDPOINTS;

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  users = [
    {
      email: 'ankit15595@gmail.com',
      password: 'Pass@1234',
      FirstName: 'Ankit',
      LastName: 'Koshti',
    },
    {
      email: 'parag.khalash@gmail.com',
      password: 'Pass@123',
      FirstName: 'Parag',
      LastName: 'Khalash',
    },
  ];

  constructor(public router: Router, private commonService: CommonService) {}

  /**
   * login request API
   */
  doLogin(data) {
    const { email, password } = data;
    console.log('password', password);
    console.log(
      'this.commonService.decodeBase64(password)',
      this.commonService.decodeBase64(password)
    );
    let response = {
      isSuccess: true,
      Message: 'Success',
    };

    const validUser = this.users.filter(
      (user) =>
        user.email == email &&
        user.password == this.commonService.decodeBase64(password)
    );
    console.log('isValidUser', validUser);

    if (!validUser || !validUser.length) {
      response.isSuccess = false;
      response.Message = 'Invalid Email/Password.. try again';
    } else {
      // success
      validUser.map((user) => {
        delete user.password;
      });
      // storing user info to localstorage
      this.saveUserInfoToLocalStorage(validUser[0]);
    }

    return response;
  }

  saveUserInfoToLocalStorage(userInfo) {
    try {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(userInfo));
    } catch (err) {
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  }

  doLogout() {
    this.clearLocalStorage();
    this.router.navigate(['./login'], { replaceUrl: true });
  }

  clearLocalStorage() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
  }
}
