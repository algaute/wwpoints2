import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>  `
})
export class AppComponent {
  title = 'app works!';
 
  /*
  private isConnected:boolean;

  ngDoBootstrap(appRef:ApplicationRef){
    this.isConnected=false;

    appRef.bootstrap(MenuComponent);
    if (this.isConnected) {
      appRef.bootstrap(RapportComponent);
    } else {
      appRef.bootstrap(LoginComponent);
    }

  }
  */
}