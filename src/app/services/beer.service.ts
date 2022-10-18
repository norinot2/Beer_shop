import { Injectable } from '@angular/core';
import { Beer } from '../interfaces/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  Beers: Beer[] = [];

  constructor() { }
}
