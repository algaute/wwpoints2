import { ApplicationRef, Component, NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }  from './login/login.component';
import { InscriptionComponent }  from './inscription/inscription.component';
import { RapportComponent }  from './rapport/rapport.component';
import { InsertionComponent }  from './insertion/insertion.component';
import { PersonalComponent }  from './personal/personal.component';

import { MenuComponent }  from './menu/menu.component';
import { AppComponent }  from './app.component';

import { DataService } from './services/data.service';

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
    DataService
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