import { NgModule } from '@angular/core';
import { TopicAdminModule } from './topic/topic-admin.module';
import { ArticleAdminModule } from './article/article-admin.module';
import { AnnouncementAdminModule } from './announcement/announcement-admin.module';
import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [

  ],
  imports: [
    TopicAdminModule,
    ArticleAdminModule,
    AnnouncementAdminModule,
    ProfileModule,
    UserModule
    ],
  providers: [

  ],
  exports: [

  ]
})
export class AdminModule {
}
