import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>login {{name}}</h1>`
})
export class LoginComponent { 
  name = 'WW points'; 
}