import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response, RequestOptions,RequestMethod } from '@angular/http';

import { APP_SETTINGS, AppSettings, IAppSettings } from './../app.settings';

import { Observable } from 'rxjs/Rx'

@Injectable()
export class DataService {

  constructor(private http: Http,
              @Inject( APP_SETTINGS ) private config: IAppSettings) {
  }
  
  cars = [
    'Ford','Chevrolet','Buick'
  ];


  myData() {

    console.log("This is the App's Key: ", this.config.API_ENDPOINT);

    return this.config.API_ENDPOINT
  }

}