import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormGroupDirective,  NgForm} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,15}$/;

@Component({
  moduleId: module.id,  
  selector: 'my-app',
  templateUrl: './templates/inscription.html',
  styleUrls: ['./templates/inscription.css']
})

export class InscriptionComponent { 
  
  tabLinks = [
    {label: 'Login', link: '/login'},
    {label: 'Inscription', link: '/inscription'}
  ]; 

  gender = [
    {value: '0', text: 'Homme'},
    {value: '1', text: 'Femme'}
  ];

  greetings = [
    {value: '0', text: 'Perdre du poid'},
    {value: '1', text: 'Stabiliser'}
  ];

  emailFormControl = new FormControl('', [ Validators.required,
    Validators.pattern(EMAIL_REGEX)]
  );
  passwordFormControl = new FormControl('', [Validators.required,
      Validators.pattern(PASSWORD_REGEX)]
  );

  myErrorStateMatcher = function (control: FormControl, form: FormGroupDirective | NgForm): boolean {
    // Error when invalid control is dirty, touched, or submitted
    const isSubmitted = form && form.submitted;
    return !!(control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}