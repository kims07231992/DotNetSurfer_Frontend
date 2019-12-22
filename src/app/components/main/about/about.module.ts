import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared.module';

import { AboutRoutingModule } from './about.routing';

import { AboutComponent } from './about.component'
import { AboutSummaryComponent } from './about-summary/about-summary.component';
import { AboutFrontendComponent } from './about-frontend/about-frontend.component';
import { AboutBackendComponent } from './about-backend/about-backend.component';

import { AboutService } from '../../../services/main/about/about.service';

@NgModule({
  declarations: [
    AboutComponent,
    AboutSummaryComponent,
    AboutFrontendComponent,
    AboutBackendComponent
  ],
  imports: [
    SharedModule,
    AboutRoutingModule
  ],
  exports: [
    AboutComponent
  ],
  providers: [
    AboutService
  ]
})
export class AboutModule { }
