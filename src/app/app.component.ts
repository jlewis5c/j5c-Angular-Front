import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'j5c-angular-front';
  opened = true

  toggleSidebar(){
    this.opened = !this.opened
    console.log(this.opened)
  }


}



// const lifecycles = singleSpaAngular({
//   bootstrapFunction: singleSpaProps => {
//     return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
//   },
//   template: '<app-root />',
//   Router,
//   NgZone,
// });

// export const bootstrap = this.lifecycles.bootstrap;
// export const mount = this.lifecycles.mount;
// export const unmount = this.lifecycles.unmount;


