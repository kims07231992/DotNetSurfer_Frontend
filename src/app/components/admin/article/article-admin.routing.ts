import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserGuard } from '../user/user.guard'

import { ArticleTableComponent } from './article-table/article-table.component';

const routes: Routes = [
  {
    path: 'admin', children: [
      {
        path: 'article',
        component: ArticleTableComponent
      }
    ],
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleAdminRoutingModule { }
