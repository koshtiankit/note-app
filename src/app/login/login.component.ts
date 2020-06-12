import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  UserAuthenticationService,
  MessageService,
  CommonService,
} from '../shared/services';

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
    private formBuilder: FormBuilder,
    private userAuthenticationService: UserAuthenticationService,
    private commonService: CommonService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.createLoginForm();
  }

  submitForm() {
    if (this.loginForm.invalid) return;

    let dataToPost = {
      email: this.loginForm.value.Email,
      password: this.loginForm.value.Password,
    };

    const responseData = this.userAuthenticationService.doLogin(dataToPost);
    console.log('responseData', responseData);

    if (responseData.isSuccess) {
      this.router.navigate(['application']);
    } else {
      this.messageService.showError(responseData.Message);
    }

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
