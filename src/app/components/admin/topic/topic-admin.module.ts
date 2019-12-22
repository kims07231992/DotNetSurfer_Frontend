import { NgModule } from '@angular/core';

import { PictureUploaderModule } from '../picture-uploader/picture-uploader.module'
import { UserModule } from '../user/user.module';
import { SharedModule } from '../../../shared.module';

import { TopicAdminRoutingModule } from './topic-admin.routing';

import { TopicTableComponent } from './topic-table/topic-table.component';
import { TopicDialogComponent } from './topic-table/topic-dialog/topic-dialog.component';

import { TopicTableService } from '../../../services/admin/topic/topic-table.service';
import { TopicDialogService } from '../../../services/admin/topic/topic-dialog.service';
  
@NgModule({
  declarations: [
    TopicTableComponent,
    TopicDialogComponent
  ],
  imports: [
    PictureUploaderModule,
    UserModule,
    SharedModule,
    TopicAdminRoutingModule
  ],
  exports: [
    TopicTableComponent
  ],
  providers: [
    TopicTableService,
    TopicDialogService
  ],
  entryComponents: [
    TopicDialogComponent
  ]
})
export class TopicAdminModule { }
