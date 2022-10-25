import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerDetailsComponent } from './components/beer-details/beer-details.component';
import { CartComponent } from './components/main-content-container/cart/cart.component';
import { MainContentContainerComponent } from './components/main-content-container/main-content-container.component';

const routes: Routes = [
  {path: '', component: MainContentContainerComponent},
  {path: 'allbeers', redirectTo: '', pathMatch: 'full'},
  {path: 'details', component: BeerDetailsComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
