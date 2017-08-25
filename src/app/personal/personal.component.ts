import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>personal {{name}}</h1>`
})
export class PersonalComponent { 
  name = 'WW points'; 
}