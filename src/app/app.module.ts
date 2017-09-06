import { ApplicationRef, Component, NgModule,LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormControl, Validators} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { LoginComponent }  from './login/login.component';
import { InscriptionComponent }  from './inscription/inscription.component';
import { RapportComponent }  from './rapport/rapport.component';
import { InsertionComponent }  from './insertion/insertion.component';
import { PersonalComponent }  from './personal/personal.component';

import { APP_SETTINGS, AppSettings } from './app.settings';
import { DataService } from './services/data.service';

import { MaterialModule } from './material.module';
import { MenuComponent }  from './menu/menu.component';
import { AppComponent }  from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'rapport',
    component: RapportComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'insertion',
    component: InsertionComponent
  }//,
  //{ 
  //  path: '**', 
  //  component: PageNotFoundComponent 
 // }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { 
        enableTracing: true 
      } // <-- debugging purposes only
    )
  ],
  declarations: [ 
    LoginComponent,
    InscriptionComponent,
    RapportComponent,
    InsertionComponent,
    PersonalComponent,
    MenuComponent,
    AppComponent
  ],
  entryComponents: [
    MenuComponent,
    AppComponent
  ],
  providers: [
    DataService,
    XMLHttpRequest,
    {
      provide: APP_SETTINGS,
      useValue: AppSettings
    },
    {
      provide: LOCALE_ID, useValue: 'fr-CH'
    },   
  ]
  //,
  //bootstrap:    [ AppComponent ]
})
export class AppModule { 
  ngDoBootstrap(appRef:ApplicationRef){
    appRef.bootstrap(MenuComponent);
    appRef.bootstrap(AppComponent);
  }
}