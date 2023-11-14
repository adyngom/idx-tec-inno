import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  PreloadAllModules,
  provideRouter,
  Routes,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';
import {  routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserModule, HttpClientModule),
      provideRouter(
        routes,
        withPreloading(PreloadAllModules),
        withInMemoryScrolling({ scrollPositionRestoration: 'top' })
      ),
      provideAnimations()
    ]
})
  .catch(err => console.error(err));
