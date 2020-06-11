import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import {
//   UserAuthenticationService,
//   ErrorHandlingService,
//   CommonService,
// } from '../shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  loginForm: FormGroup;
  private allSubscribers: Array<any> = [];
  public loginButtonDisable: boolean = false;
  public hide: boolean = false;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) // private userAuthenticationService: UserAuthenticationService,
  // private commonService: CommonService,
  // private errorHandlingService: ErrorHandlingService
  {}

  ngOnInit() {
    this.createLoginForm();
  }

  formValidations = {
    Email: [
      { type: 'required', message: 'Email is required' },
      // { type: 'pattern', message: 'Email is incorrect' },
    ],
    Password: [
      { type: 'required', message: 'Password is required' },
      // { type: 'minlength', message: 'Password must be at least 8 characters long' },
      // { type: 'pattern', message: 'Password must contain uppercase, lowercase letters, numbers and special characters !@#$%&*' },
    ],
  };

  submitForm() {
    if (this.loginForm.invalid) return;

    // let dataToPost = {
    //   Email: this.utilService.encodeBase64(this.loginForm.value.Email),
    //   Password: this.utilService.encodeBase64(this.loginForm.value.Password),
    // };

    // this.allSubscribers.push(
    //   this.userAuthenticationService.doLogin(dataToPost).subscribe(
    //     (response: any) => {
    //       let userInfo = response.Result.UserInfo;
    //       this.userAuthenticationService.saveUserInfoToLocalStorage(userInfo);
    //       this.commonService.setMenus();

    //       setTimeout(() => {
    //         if (response.Result.UserInfo.IsRequiredPasswordChange != true) {
    //           this.router.navigate(['application']);
    //         } else {
    //           this.router.navigateByUrl(
    //             'changepassword?ID=' +
    //               encodeURI(
    //                 this.utilService.encodeBase64(
    //                   response.Result.UserInfo.UserId
    //                 )
    //               )
    //           );
    //         }
    //       }, 1000);
    //     },
    //     (errors) => {
    //       this.errorHandlingService.showErrorDialog(errors.error.Message);
    //     }
    //   )
    // );
  }

  ngAfterViewInit() {}

  /**
   * Creates login form
   */
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      Email: [''],
      Password: [''],
    });
  }

  ngOnDestroy() {
    this.allSubscribers.map((value) => value.unsubscribe());
  }
}
