import { InjectionToken } from "@angular/core";

export interface IAppSettings {
    API_ENDPOINT: string;
}
export const AppSettings: IAppSettings = {    
    API_ENDPOINT: "http://wwpoints.ch/"    
};

export let APP_SETTINGS = new InjectionToken< IAppSettings >( 'app.settings' );
