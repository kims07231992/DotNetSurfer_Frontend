import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserGuard } from '../user/user.guard'

import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: 'admin', children: [
      {
        path: 'profile',
        component: ProfileComponent
      }
    ],
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
