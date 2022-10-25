import { Component, HostListener } from '@angular/core';
import { BeerService } from './services/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  inCart: boolean = false;

  constructor(public beerService: BeerService) {}
  clearSelectedBeer(){
    this.beerService.selectedBeer = undefined;
  }
}
