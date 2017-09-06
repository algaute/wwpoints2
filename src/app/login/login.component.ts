import { Component, NgModule, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';

import { LoginService } from './../services/login.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,15}$/;
@Component({
  moduleId: module.id,  
  selector: 'my-app',
  templateUrl: './templates/login.html',
  styleUrls: ['./templates/login.css'],
  providers: [LoginService]
  
})
export class LoginComponent { 
  
  tabLinks = [
    {label: 'Login', link: '/login'},
    {label: 'Inscription', link: '/inscription'}
  ]; 

  emailFormControl = new FormControl({value: 'algaute@hispeed.ch', disabled: false}, [ Validators.required,
    Validators.pattern(EMAIL_REGEX)]
  );
  passwordFormControl = new FormControl('', [Validators.required,
      Validators.pattern(PASSWORD_REGEX)]
  );
  keepConnectedFormControl = new FormControl({value: true, disabled: false}, []
  );

  private loginForm:FormGroup;
  private responseStatus:Object= [];
  
  constructor(public fb: FormBuilder, public _loginService:LoginService) {
    this.loginForm = this.fb.group({
      email:  this.emailFormControl,
      password: this.passwordFormControl,
      keepConnected:this.keepConnectedFormControl
    });
  }
    
  doLogin(event:Event) {
    console.log(event);
    console.log(this.loginForm.value);

    this._loginService.authenticate(this.loginForm).subscribe(
      data => console.log(this.responseStatus = data),
      err => console.log(err),
      () => console.log('Request Completed')
   ); 
  }
  
  ngOnInit() {
  }
  

}