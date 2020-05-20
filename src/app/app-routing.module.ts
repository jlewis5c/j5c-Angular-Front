import { MoreComponent } from './more/more.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
