import { NgModule } from '@angular/core';

import { QuillModule } from 'ngx-quill';
import { SharedModule } from '../../../shared.module';

import { TextEditorComponent } from './text-editor.component';

@NgModule({
  declarations: [
    TextEditorComponent
  ],
  imports: [
    QuillModule,
    SharedModule
  ],
  exports: [
    TextEditorComponent
  ],
  providers: [

  ]
})
export class TextEditorModule { }
