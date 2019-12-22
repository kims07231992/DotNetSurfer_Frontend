import { NgModule } from '@angular/core';

import { PictureUploaderModule } from '../picture-uploader/picture-uploader.module'
import { TextEditorModule } from '../text-editor/text-editor.module'
import { SharedModule } from '../../../shared.module';

import { ArticleAdminRoutingModule } from './article-admin.routing';

import { ArticleTableComponent } from './article-table/article-table.component';
import { ArticleDialogComponent } from './article-table/article-dialog/article-dialog.component';

import { ArticleTableService } from '../../../services/admin/article/article-table.service';
import { ArticleDialogService } from '../../../services/admin/article/article-dialog.service';
import { TopicTableService } from '../../../services/admin/topic/topic-table.service';

@NgModule({
  declarations: [
    ArticleTableComponent,
    ArticleDialogComponent,
  ],
  imports: [
    PictureUploaderModule,
    TextEditorModule,
    SharedModule,
    ArticleAdminRoutingModule
  ],
  exports: [
    ArticleTableComponent
  ],
  providers: [
    ArticleTableService,
    ArticleDialogService,
    TopicTableService
  ],
  entryComponents: [
    ArticleDialogComponent
  ]
})
export class ArticleAdminModule { }
