import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from 'src/app/interfaces/beer';
import { BeerService } from 'src/app/services/beer.service';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-container',
  templateUrl: './beer-container.component.html',
  styleUrls: ['./beer-container.component.scss']
})
export class BeerContainerComponent implements OnInit {

  constructor(public http: HttpService, public beerService: BeerService, private Router: Router) {
    this.http.getBeers().subscribe((data) => {
      this.beerService.Beers = data as Beer[];

    })
  }

  ngOnInit(): void {

  }

}
