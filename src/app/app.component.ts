import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url'

@Component({
  selector: 'nav-side-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nav & Sidebar';

  opened = true

  toggleSidebar(){
    this.opened = !this.opened
    console.log(this.opened)
  }

}



