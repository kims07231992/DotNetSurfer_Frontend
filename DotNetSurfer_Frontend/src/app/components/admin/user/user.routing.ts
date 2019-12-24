import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './signUp/signUp.component';
import { SignInComponent } from './signIn/signIn.component';

const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'signup', component: SignUpComponent },
      { path: 'signin', component: SignInComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
