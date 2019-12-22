import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserGuard } from '../user/user.guard'

import { TopicTableComponent } from './topic-table/topic-table.component';

const routes: Routes = [
  {
    path: 'admin', children: [
      {
        path: 'topic',
        component: TopicTableComponent
      }
    ],
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicAdminRoutingModule { }
