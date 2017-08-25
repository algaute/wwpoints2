import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>rapport {{name}}</h1>`
})
export class RapportComponent { 
  name = 'WW points'; 
}