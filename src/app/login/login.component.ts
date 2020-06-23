import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  UserAuthenticationService,
  MessageService,
  CommonService,
} from '@shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  public isShowPassword: boolean = false;

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

  /**
   * Login
   */
  actionLogin() {
    const dataToPost = {
      email: this.loginForm.value.Email,
      password: this.commonService.encodeBase64(this.loginForm.value.Password),
    };

    const responseData = this.userAuthenticationService.doLogin(dataToPost);

    if (responseData.isSuccess) {
      this.router.navigate(['application']);
    } else {
      this.messageService.showError(responseData.Message);
    }
  }

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
    //unsubscribe here all subscription
  }
}
