import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Beer } from 'src/app/interfaces/beer';
import { BeerService } from 'src/app/services/beer.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-side-filter-menu',
  templateUrl: './side-filter-menu.component.html',
  styleUrls: ['./side-filter-menu.component.scss'],
})
export class SideFilterMenuComponent implements OnInit {
  methodForm: FormGroup;
  abvForm: FormGroup;
  beerStyle: FormGroup;
  specialForm: FormGroup;

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

    this.abvForm = fb.group({
      from: [],
      to: [],
    });

    this.beerStyle = fb.group({
      ipa: false,
      stout: false,
      lager: false,
      sour: false,
      pale: false,
    });

    this.specialForm = fb.group({
      special: false,
    });
  }

  get abvFormFrom(): FormControl {
    return this.abvForm.get('from') as FormControl;
  }

  get abvFormTo(): FormControl {
    return this.abvForm.get('to') as FormControl;
  }

  ngOnInit(): void {}

  onSubmit() {}
  onSubmitAbv() {
    if (this.abvFormFrom.value && this.abvFormTo.value) {
      this.beerService.Beers = this.beerService.Beers.filter(
        (beer: Beer) =>
          beer.abv >= this.abvFormFrom.value && beer.abv <= this.abvFormTo.value
      );
    } else if (this.abvFormFrom.value) {
      this.beerService.Beers = this.beerService.Beers.filter(
        (beer: Beer) => beer.abv >= this.abvFormFrom.value
      );
    } else if (this.abvFormTo.value) {
      this.beerService.Beers = this.beerService.Beers.filter(
        (beer: Beer) => beer.abv <= this.abvFormTo.value
      );
    } else {
      this.httpService.getBeers().subscribe((data) => {
        this.beerService.Beers = data;
      });
    }
  }

  resetForms() {
    this.beerStyle.reset();
    this.methodForm.reset();
    this.abvForm.reset();
    this.specialForm.reset();
    this.httpService.getBeers().subscribe((data) => {
      this.beerService.Beers = data;
    });
  }
}
