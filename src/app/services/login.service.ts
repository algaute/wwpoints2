import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response, RequestOptions,RequestMethod } from '@angular/http';
import { FormGroup} from '@angular/forms';

import 'rxjs/add/operator/map';

import { APP_SETTINGS, AppSettings, IAppSettings } from './../app.settings';

import { Observable } from 'rxjs/Rx'

@Injectable()
export class LoginService {

  private http: Http;
  private postUrl:string;
  constructor(private _http: Http,
              @Inject( APP_SETTINGS ) private config: IAppSettings) {
    this.http=_http;     
    this.postUrl=config.API_ENDPOINT;           
  }
  
  authenticate(fb:FormGroup) {
    console.log("This is the App's Key: ", this.config.API_ENDPOINT);
    
    return this.http.post(
      this.postUrl+"/fr/account/authenticate", 
      fb.value, 
      { }
    ).map(res =>  res.json());     	    
  }

}