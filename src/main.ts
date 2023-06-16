import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl' // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiaHVpdHppdHppbGkiLCJhIjoiY2tsYjdrYXFlM3F0bzJ4cW40amVuejJqdSJ9.TqdtVhgruR6Yhc1qpSsSvQ'


if(!navigator.geolocation){
  alert('Navegador no soporta la geolocalización.')
  throw new Error('Navegador no soporta la geolocalización.')
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
