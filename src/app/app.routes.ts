import { Routes } from '@angular/router';

import { ProductsComponent } from './components/products';
import { HomeComponent } from './components/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
];
