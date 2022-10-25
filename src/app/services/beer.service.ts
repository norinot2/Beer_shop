import { Injectable } from '@angular/core';
import { Beer } from '../interfaces/beer';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  Beers: Beer[] = [];
  carouselBeers: Beer[] = [];
  filteredBeers: Beer[] = [];
  wishListedBeers: Beer[] = [];
  beerCount: number[] = [];
  navigatedToCart: boolean = false;
  subTotal: number[] = [];
  inCart: Beer[] = [];

  selectedBeer?: Beer;
  constructor() {}

  putToWishList(beer: Beer): boolean {
    if (this.wishListedBeers.includes(beer)) {
      this.wishListedBeers =
        this.wishListedBeers.filter((item) => item !== beer);
      return false;
    } else {
      this.wishListedBeers.push(beer);
      return true;
    }
  }

  cartCount(){
    let uniqueBeers = [...new Set(this.inCart)];

    this.beerCount = uniqueBeers.map((beer) => {
      return this.inCart.filter((item) => item === beer).length;
    });

    this.subTotal = uniqueBeers.map((beer) => {
      return this.inCart.filter((item) => item === beer).length * beer.ibu;
    });

    return uniqueBeers;
  }
}
