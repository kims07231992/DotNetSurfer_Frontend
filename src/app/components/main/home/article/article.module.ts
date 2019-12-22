import { NgModule } from '@angular/core';
import { DisqusModule } from "ngx-disqus";
import { SharedModule } from '../../../../shared.module';

import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CommentComponent } from './article-detail/comment/comment.component';

import { ArticleService } from '../../../../services/main/home/article.service';

import { ArticleRoutingModule } from './article.routing';

import { environment } from '../../../../../environments/environment';

@NgModule({
  declarations: [
    ArticleCardComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    CommentComponent
  ],
  imports: [
    DisqusModule.forRoot(environment.disqusKey),
    SharedModule,
    ArticleRoutingModule
  ],
  exports: [
    ArticleCardComponent,
    ArticleListComponent
  ],
  providers: [
    ArticleService
  ]
})
export class ArticleModule { }
