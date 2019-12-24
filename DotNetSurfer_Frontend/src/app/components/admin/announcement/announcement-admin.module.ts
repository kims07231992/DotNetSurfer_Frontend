import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared.module';

import { AnnouncementAdminRoutingModule } from './announcement-admin.routing';

import { AnnouncementTableComponent } from './announcement-table/announcement-table.component';
import { AnnouncementDialogComponent } from './announcement-table/announcement-dialog/announcement-dialog.component';

import { AnnouncementTableService } from '../../../services/admin/announcement/announcement-table.service';
import { AnnouncementDialogService } from '../../../services/admin/announcement/announcement-dialog.service';
import { StatusService } from '../../../services/admin/status/status.service';

@NgModule({
  declarations: [
    AnnouncementTableComponent,
    AnnouncementDialogComponent
  ],
  imports: [
    SharedModule,
    AnnouncementAdminRoutingModule
  ],
  exports: [
    AnnouncementTableComponent
  ],
  providers: [
    AnnouncementTableService,
    AnnouncementDialogService,
    StatusService
  ],
  entryComponents: [
    AnnouncementDialogComponent
  ]
})
export class AnnouncementAdminModule { }
