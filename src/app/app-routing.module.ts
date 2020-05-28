import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { MoreComponent } from './more/more.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF } from '@angular/common';
import { from } from 'rxjs';



const routes: Routes = [{
  path: "",
  component: DashboardComponent
},
{
  path:"posts",
  component:PostsComponent

},
{
  path:"contact",
  component: ContactComponent
},
{
  path:"more",
  component: MoreComponent
},
{
  path: "**", component: EmptyRouteComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //Addded wth Ryan
 providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }

