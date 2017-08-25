import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>insertion {{name}}</h1>`
})
export class InsertionComponent { 
  name = 'WW points'; 
}