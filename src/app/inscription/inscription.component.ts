import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>inscription {{name}}</h1>`
})
export class InscriptionComponent { 
  name = 'WW points'; 
}