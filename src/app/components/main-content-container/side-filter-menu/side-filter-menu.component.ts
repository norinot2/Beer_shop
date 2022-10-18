import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BeerService } from 'src/app/services/beer.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-side-filter-menu',
  templateUrl: './side-filter-menu.component.html',
  styleUrls: ['./side-filter-menu.component.scss'],
})
export class SideFilterMenuComponent implements OnInit {
  methodForm: FormGroup;

  constructor(
    fb: FormBuilder,
    public beerService: BeerService,
    public httpService: HttpService
  ) {
    this.methodForm = fb.group({
      mash_temp: false,
      fermentation: false,
      twist: false,
    });
    console.log(this.methodForm.value);
  }

  ngOnInit(): void {}

  onSubmit() {
    this.beerService.Beers = this.beerService.Beers.filter((beer) => {

      if (this.methodForm.value.mash_temp === true) {
        return beer.method.mash_temp;
      }
      else if (this.methodForm.value.fermentation === true) {
        return beer.method.fermentation;
      }
      else if (this.methodForm.value.twist === true) {
        return beer.method.twist;
      }
      else if (this.methodForm.value.mash_temp === false && this.methodForm.value.fermentation === false && this.methodForm.value.twist === false) {
        return this.httpService.getBeers();
      } else return 'Error no beers';
    });
  }
}
