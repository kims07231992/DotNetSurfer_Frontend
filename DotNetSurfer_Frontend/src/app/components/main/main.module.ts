import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [

  ],
  imports: [
    HomeModule,
    AboutModule,
    ContactModule
  ],
  exports: [

  ],
  providers: [

  ]
})
export class MainModule { }
