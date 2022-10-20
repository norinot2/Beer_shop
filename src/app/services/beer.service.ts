import { Injectable } from '@angular/core';
import { Beer } from '../interfaces/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  Beers: Beer[] = [];

  inCart: Beer[] = [];

  selectedBeer?: Beer;
  constructor() { }
}
