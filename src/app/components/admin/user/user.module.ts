import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared.module';
import { WebStorageModule } from 'ngx-store';

import { UserRoutingModule } from './user.routing';

import { SignUpComponent } from './signUp/signUp.component';
import { SignInComponent } from './signIn/signIn.component';

import { UserService } from '../../../services/admin/user/user.service';

import { PasswordValidator } from '../../../directives/password-validator';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    PasswordValidator
  ],
  imports: [
    WebStorageModule,
    SharedModule,
    UserRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
