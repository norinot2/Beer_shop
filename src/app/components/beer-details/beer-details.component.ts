import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss'],
})
export class BeerDetailsComponent implements OnInit {
  addToCartForm: FormGroup;

  constructor(fb: FormBuilder, public beerService: BeerService) {
    this.addToCartForm = fb.group({
      quantity: 1,
    });
  }

  maltArray: string[] = [];
  hopsArray: string[] = [];
  yeastArray: string[] = [];

  ngOnInit(): void {
    let ingredients = this.beerService.selectedBeer?.ingredients;
    let malt = ingredients?.malt;

    if (malt) {
      for (let i = 0; i < malt.length; i++) {
        let maltName = malt[i].name;
        let maltAmount = malt[i].amount.value;
        let maltUnit = malt[i].amount.unit;
        let maltString = `${maltAmount} ${maltUnit} of ${maltName}`;
        this.maltArray.push(maltString);
      }
    }
    let hops = ingredients?.hops;
    if (hops) {
      for (let i = 0; i < hops.length; i++) {
        let hopsName = hops[i].name;
        let hopsAmount = hops[i].amount.value;
        let hopsUnit = hops[i].amount.unit;
        let hopsString = `${hopsAmount} ${hopsUnit} of ${hopsName}`;
        this.hopsArray.push(hopsString);
      }
    }
    let yeast = ingredients?.yeast;
    if (yeast) {
      this.yeastArray.push(yeast);
    }
  }
  onRemoveFromForm() {
    let value = this.addToCartForm.value.quantity;
    if (value > 0) {
      this.addToCartForm.get('quantity')?.setValue(value - 1);
      console.log(this.addToCartForm.value.quantity);
    }
  }
  onAddToForm() {
    //increment the value of the form by 1 on each click
    let value = this.addToCartForm.value.quantity;
    this.addToCartForm.get('quantity')?.setValue(value + 1);
  }

  onSubmit() {
    for (let i = 0; i < this.addToCartForm.value.quantity; i++) {
      this.beerService.inCart.push(this.beerService.selectedBeer!);
    }
    console.log(this.beerService.selectedBeer?.ingredients.hops);
  }
}
