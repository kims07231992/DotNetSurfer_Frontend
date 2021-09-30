import { NgModule } from '@angular/core';

import { BannerComponent } from './banner.component';

import { SharedModule } from '../../../../shared.module';

import { BannerService } from '../../../../services/main/home/banner.service';

@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    BannerComponent
  ],
  providers: [
    BannerService
  ]
})
export class BannerModule { }
