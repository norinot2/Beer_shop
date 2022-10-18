import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Beer } from '../interfaces/beer';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL: string = environment.API;

  constructor(private http: HttpClient) {

   }


  getBeers() {
    return this.http.get<Beer[]>('https://api.punkapi.com/v2/beers?page=1&per_page=80');
  }

}
