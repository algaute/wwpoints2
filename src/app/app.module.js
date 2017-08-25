"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var inscription_component_1 = require("./inscription/inscription.component");
var rapport_component_1 = require("./rapport/rapport.component");
var insertion_component_1 = require("./insertion/insertion.component");
var personal_component_1 = require("./personal/personal.component");
var menu_component_1 = require("./menu/menu.component");
var app_component_1 = require("./app.component");
var data_service_1 = require("./services/data.service");
var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'inscription',
        component: inscription_component_1.InscriptionComponent
    },
    {
        path: 'rapport',
        component: rapport_component_1.RapportComponent
    },
    {
        path: 'personal',
        component: personal_component_1.PersonalComponent
    },
    {
        path: 'insertion',
        component: insertion_component_1.InsertionComponent
    } //,
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.prototype.ngDoBootstrap = function (appRef) {
        appRef.bootstrap(menu_component_1.MenuComponent);
        appRef.bootstrap(app_component_1.AppComponent);
    };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes, {
                enableTracing: true
            } // <-- debugging purposes only
            )
        ],
        declarations: [
            login_component_1.LoginComponent,
            inscription_component_1.InscriptionComponent,
            rapport_component_1.RapportComponent,
            insertion_component_1.InsertionComponent,
            personal_component_1.PersonalComponent,
            menu_component_1.MenuComponent,
            app_component_1.AppComponent
        ],
        entryComponents: [
            menu_component_1.MenuComponent,
            app_component_1.AppComponent
        ],
        providers: [
            data_service_1.DataService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map