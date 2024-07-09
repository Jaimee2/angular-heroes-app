import {Routes} from '@angular/router';
import {Error404PageComponent} from "./shared/pages/error404-page/error404-page.component";

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routers')
      .then(r => r.authRouters)
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.routers')
      .then(r => r.heroesRouters)
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
