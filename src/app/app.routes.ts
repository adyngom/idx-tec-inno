//import { PageComponent } from './pages/page.component';
import { Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        data: { animation: 'Home' }
      },
      {
        path: ':type/:collection',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        pathMatch: 'full',
        data: { animation: 'Landing' }
      }
    ]
  },

];
