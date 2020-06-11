import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { UserAuthenticationService } from '../shared/services';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        SharedModule,
    ],
    declarations: [LoginComponent],
    providers: [
        UserAuthenticationService
    ]
})

export class LoginModule {
}
