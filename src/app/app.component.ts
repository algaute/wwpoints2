import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `
  //,styleUrls: ['./app.component.css']
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