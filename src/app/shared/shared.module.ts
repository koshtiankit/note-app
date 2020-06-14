import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonMaterialModule } from './common-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonService, UserAuthenticationService } from './services';

import {
  HeaderComponent,
  SidebarComponent,
  ConfirmDialogComponent,
} from './components';

import { AuthGuard, GuestGuard } from './guards';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonMaterialModule,
    FlexLayoutModule,
  ],
  declarations: [HeaderComponent, SidebarComponent, ConfirmDialogComponent],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ConfirmDialogComponent,
    CommonMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [AuthGuard, GuestGuard, CommonService, UserAuthenticationService],
})
export class SharedModule {}
