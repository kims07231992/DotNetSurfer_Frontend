import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';

import { SharedModule } from '../../../shared.module';
import { ContactRoutingModule } from './contact.routing';

import { ContactService } from '../../../services/main/contact/contact.service';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  exports: [

  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
