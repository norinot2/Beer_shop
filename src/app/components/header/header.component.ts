import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public beerService: BeerService) { }

  ngOnInit(): void {
  }

  clearSelectedBeer(){
    this.beerService.navigatedToCart = false;
    this.beerService.selectedBeer = undefined;
  }
}
