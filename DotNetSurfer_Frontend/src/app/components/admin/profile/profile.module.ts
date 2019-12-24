import { NgModule } from '@angular/core';

import { PictureUploaderModule } from '../picture-uploader/picture-uploader.module'
import { SharedModule } from '../../../shared.module';

import { ProfileRoutingModule } from './profile.routing';

import { ProfileComponent } from './profile.component';

import { ProfileService } from '../../../services/admin/profile/profile.service';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    PictureUploaderModule,
    SharedModule,
    ProfileRoutingModule
  ],
  exports: [
    
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
