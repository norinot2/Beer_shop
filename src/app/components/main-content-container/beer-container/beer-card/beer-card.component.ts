import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Beer } from 'src/app/interfaces/beer';
import { BeerService } from 'src/app/services/beer.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss'],
})
export class BeerCardComponent implements OnInit {
  @Input() beer?: Beer;
  @Input() name?: string;
  @Input() image_url?: string;
  @Input() tagline?: string;
  @Input() contributor?: string;
  @Input() beerPrice?: number;

  cartForm: FormGroup;

  constructor(
    fb: FormBuilder,
    public beerService: BeerService,
    public router: Router,
    public httpService: HttpService
  ) {
    this.cartForm = fb.group({
      quantity: 1,
    });
  }

  ngOnInit(): void {}
  putToCart(beer: Beer) {
    for (let i = 0; i < this.cartForm.value.quantity; i++) {
      this.beerService.inCart.push(beer);
    }
  }
  selectedBeer(beer: Beer) {
    this.router.navigate(['/details', { id: beer.id }]);
    this.beerService.selectedBeer = beer;
  }

}
