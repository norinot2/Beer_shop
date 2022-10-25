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

  onSubmitMethod() {
    this.httpService.GetBeersByFilter(this.methodForm.value).subscribe((data) => {
      this.beerService.Beers = data;
    });
  }


  onSubmitAbv() {

    //if the below input is filled in and the above input is empty then run the below function
    if(this.abvFormTo.value !== null && this.abvFormFrom.value === null) {
      this.httpService.GetAbvBelow(this.abvFormTo.value).subscribe((data) => {
        this.beerService.Beers = data;
      });
    }
    //if the above input is filled in and the below input is empty then run the below function
    if(this.abvFormFrom.value !== null && this.abvFormTo.value === null) {
      this.httpService.GetAbvAbove(this.abvFormFrom.value).subscribe((data) => {
        this.beerService.Beers = data;
      });
    }

    //if both inputs are filled in then run the below function
    if(this.abvFormFrom.value !== null && this.abvFormTo.value !== null) {
      this.httpService.GetAbvAboveAndBelow(this.abvFormFrom.value, this.abvFormTo.value).subscribe((data) => {
        this.beerService.Beers = data;
      });
    }

  }

  resetForms() {
    window.scrollTo(0, 0);
    this.beerStyle.reset();
    this.methodForm.reset();
    this.abvForm.reset();
    this.specialForm.reset();
    this.httpService.page = 1;
    this.httpService.getBeers(1).subscribe((data) => {
      this.beerService.Beers = data;
    });
  }
}
