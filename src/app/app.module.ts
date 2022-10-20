import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchbarComponent } from './components/header/searchbar/searchbar.component';
import { MainContentContainerComponent } from './components/main-content-container/main-content-container.component';
import { SideFilterMenuComponent } from './components/main-content-container/side-filter-menu/side-filter-menu.component';
import { BeerContainerComponent } from './components/main-content-container/beer-container/beer-container.component';
import { BeerCardComponent } from './components/main-content-container/beer-container/beer-card/beer-card.component';
import { SaleComponent } from './components/badges/sale/sale.component';
import { SoldOutComponent } from './components/badges/sold-out/sold-out.component';
import { NewComponent } from './components/badges/new/new.component';
import { ProductOfTheWeekComponent } from './components/badges/product-of-the-week/product-of-the-week.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BeerDetailsComponent } from './components/beer-details/beer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    MainContentContainerComponent,
    SideFilterMenuComponent,
    BeerContainerComponent,
    BeerCardComponent,
    SaleComponent,
    SoldOutComponent,
    NewComponent,
    ProductOfTheWeekComponent,
    BeerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
