import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPaneComponent } from './main-pane/main-pane.component';
import { SidebarModule } from 'ng-sidebar';
import { PostsComponent } from './posts/posts.component';
import { ContactComponent } from './contact/contact.component';
import { MoreComponent } from './more/more.component';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPaneComponent,
    PostsComponent,
    ContactComponent,
    MoreComponent,
    DashboardComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


