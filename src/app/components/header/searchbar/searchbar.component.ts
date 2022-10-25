import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BeerService } from 'src/app/services/beer.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  searchbarForm: FormGroup;

  constructor(fb: FormBuilder, public beerService: BeerService, public httpService: HttpService) {
    this.searchbarForm = fb.group({
      search: ['']
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    //filter the beers array in the beer service based on the search term
    this.beerService.Beers = this.beerService.Beers.filter((beer) => {
      return beer.name.toLowerCase().includes(this.searchbarForm.value.search.toLowerCase());
    }
    );

    if(this.searchbarForm.value.search === '') {
      console.log(this.beerService.Beers);

      this.httpService.getBeers(1).subscribe((data) => {
        this.beerService.Beers = data;
      });
    }
  }
}
