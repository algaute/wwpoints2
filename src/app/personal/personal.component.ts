import { Component } from '@angular/core';

import { DataService } from './../services/data.service';

@Component({
  selector: 'my-app',
  template: `<h1>personal {{name}}</h1><p>{{ someProperty }}</p>`
})
export class PersonalComponent { 
  name = 'WW points'; 

  constructor(private dataService:DataService) {

  }

  someProperty:string = '';

  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }
}