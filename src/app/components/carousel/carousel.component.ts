import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  numberOfPages: number[] = [];

  currentPage: number = 0;

  isActive: boolean = true;

  constructor(public beerService: BeerService) {
    this.beerService.carouselBeers = this.beerService.Beers.slice(0, 15);

    for (let i = 0; i < this.beerService.carouselBeers.length / 3; i++) {
      this.numberOfPages.push(i);
    }

    setTimeout(() => {
      let carousel = document.getElementById('indicator_0');
      carousel?.classList.add('active_button');
    }, 1);
  }

  ngOnInit(): void {}

  scrollRight() {
    let carousel = document.getElementById('carousel');

    let carouselButton = document.getElementById(
      'indicator_' + this.currentPage
    );
    carouselButton?.classList.remove('active_button');
    carouselButton = document.getElementById(
      'indicator_' + (this.currentPage + 1)
    );
    carouselButton?.classList.add('active_button');

    carousel!.scrollLeft += 953.5 + 26;

    if (this.currentPage != this.numberOfPages.length) {
      this.currentPage++;
    }
  }
  scrollLeft() {
    let carousel = document.getElementById('carousel');

    let carouselButton = document.getElementById(
      'indicator_' + this.currentPage
    );
    carouselButton?.classList.remove('active_button');
    carouselButton = document.getElementById(
      'indicator_' + (this.currentPage - 1)
    );
    carouselButton?.classList.add('active_button');

    carousel!.scrollLeft -= 953.5 + 26;

    if (this.currentPage != 0) {
      this.currentPage--;
    }
  }
}
