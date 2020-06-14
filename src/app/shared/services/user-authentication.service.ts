import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './common.service';

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
      password: 'Pass@1234',
      FirstName: 'Parag',
      LastName: 'Khalash',
    },
  ];

  constructor(public router: Router, private commonService: CommonService) {}

  /**
   * login request
   * @param data  - contain email and password (object)
   */
  doLogin(data) {
    const { email, password } = data;

    let response = {
      isSuccess: true,
      Message: 'Success',
    };

    const validUser = this.users.filter(
      (user) =>
        user.email == email &&
        user.password == this.commonService.decodeBase64(password)
    );

    if (!validUser || !validUser.length) {
      //error
      response.isSuccess = false;
      response.Message = 'Incorrect Email/Password.. try again';
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

  /**
   * Store user information to local storage
   */
  saveUserInfoToLocalStorage(userInfo) {
    try {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(userInfo));
    } catch (err) {
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  }

  /**
   * logout request
   */
  doLogout() {
    this.clearLocalStorage();
    this.router.navigate(['./login'], { replaceUrl: true });
  }

  /**
   * clear localstorage values
   */
  clearLocalStorage() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
  }
}
