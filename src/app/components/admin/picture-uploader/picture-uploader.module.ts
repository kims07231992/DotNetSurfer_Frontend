import { NgModule } from '@angular/core';

import { FileUploadModule } from 'ng2-file-upload';
import { SharedModule } from '../../../shared.module';

import { PictureUploaderComponent } from './picture-uploader.component';

@NgModule({
  declarations: [
    PictureUploaderComponent
  ],
  imports: [
    FileUploadModule,
    SharedModule
  ],
  exports: [
    PictureUploaderComponent
  ],
  providers: [

  ]
})
export class PictureUploaderModule { }
