import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Beer } from '../interfaces/beer';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  BASE_URL: string = environment.API;

  page: number = 1;

  constructor(private http: HttpClient) {}

  getBeers(page: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(
      this.BASE_URL + '?page=' + page + '&per_page=10'
    );
  }

  getBeersByMethod(method: string): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.BASE_URL + '?method=' + method);
  }
  GetAbvBelow(below: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.BASE_URL + '?abv_lt=' + below);
  }

  GetAbvAbove(above: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.BASE_URL + '?abv_gt=' + above);
  }

  GetAbvAboveAndBelow(above: number, below: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(
      this.BASE_URL + '?abv_gt=' + above + '&abv_lt=' + below
    );
  }


  GetBeersByFilter(value: {mash_temp: boolean, fermentation: boolean, twist: boolean} ): Observable<Beer[]> {


    //Yeah this looks kinda bad but for now I'm just gonna leave it like this and come back to it later.
    if(value.mash_temp === true){
    return this.http.get<Beer[]>(this.BASE_URL + '?hops=' + 'Ahtanum');
    }
    else if(value.fermentation === true){
      return this.http.get<Beer[]>(this.BASE_URL + '?malt=' + 'extra pale');
    }
    else if(value.twist === true){
      return this.http.get<Beer[]>(this.BASE_URL + '?yeast=' + 'Wyeast 1056 - American Ale™');
    }
    else if(value.mash_temp && value.fermentation){
      return this.http.get<Beer[]>(this.BASE_URL + '?hops=' + 'Ahtanum' + '&malt=' + 'extra pale');
    }
    else if(value.mash_temp && value.twist){
      return this.http.get<Beer[]>(this.BASE_URL + '?hops=' + 'Ahtanum' + '&yeast=' + 'Wyeast 1056 - American Ale™');
    }
    else if(value.fermentation && value.twist){
      return this.http.get<Beer[]>(this.BASE_URL + '?malt=' + 'extra pale' + '&yeast=' + 'Wyeast 1056 - American Ale™');
    }
    else if(value.mash_temp && value.fermentation && value.twist){
      return this.http.get<Beer[]>(this.BASE_URL + '?hops=' + 'Ahtanum' + '&malt=' + 'extra pale' + '&yeast=' + 'Wyeast 1056 - American Ale™');
    }
    else{
      return this.http.get<Beer[]>(this.BASE_URL);
    }
  }
}
