import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { JSONP_PROVIDERS, HTTP_PROVIDERS } from '@angular/http';
import { ProximityAppComponent, environment } from './app/';
import { ANGULAR2_GOOGLE_MAPS_PROVIDERS, LazyMapsAPILoaderConfig } from 'angular2-google-maps/core';
import { FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthProviders, AuthMethods } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(ProximityAppComponent, [
  JSONP_PROVIDERS, 
  HTTP_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  provide(LazyMapsAPILoaderConfig, {useFactory: () => {
    let config = new LazyMapsAPILoaderConfig();
    config.apiVersion = '3';
    config.libraries = ['places'];
    config.apiKey = 'AIzaSyD90zqxTa46SdMqSeM529xHF5Ye9DBkyTM';
    return config;
  }}),
  FIREBASE_PROVIDERS,
  defaultFirebase('https://ts-proximity.firebaseio.com'),
  firebaseAuthConfig({
    provider: AuthProviders.Twitter,
    method: AuthMethods.Popup
  })

  
  ]);
