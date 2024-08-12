import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cart', component: CartComponent },
  { path: 'item/:id', component: ItemDetailsComponent}
];
