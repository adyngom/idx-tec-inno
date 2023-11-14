import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {
  PreloadAllModules,
  provideRouter,
  Routes,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';


bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserModule, HttpClientModule),
      provideRouter(
        [
          
        ],
        withPreloading(PreloadAllModules),
        withInMemoryScrolling({ scrollPositionRestoration: 'top' })
      )
    ]
})
  .catch(err => console.error(err));
