import { NgModule } from '@angular/core';
import { ArticleModule } from './article/article.module';
import { BannerModule } from './banner/banner.module';
import { SharedModule } from '../../../shared.module';

import { HomeRoutingModule } from './home.routing';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ArticleModule,
    BannerModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [

  ]
})
export class HomeModule { }
