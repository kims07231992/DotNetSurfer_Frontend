import { NgModule } from '@angular/core';
import { MainModule } from './components/main/main.module';
import { AdminModule } from './components/admin/admin.module';
import { SharedModule } from './shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MainModule,
    AdminModule,
    SharedModule,
    
    AppRoutingModule,
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
