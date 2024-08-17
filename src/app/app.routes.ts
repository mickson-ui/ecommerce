import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LoginComponent } from './auth/login/login.component';
import { OffersComponent } from './offers/offers.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  // { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cart', component: CartComponent },
  { path: 'offers', component: OffersComponent},
  {
    path: 'item/:id',
    loadComponent: () => import('./item-details/item-details.component').then(m => m.ItemDetailsComponent)
  },

];
