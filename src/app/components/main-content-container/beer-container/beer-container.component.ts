import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from 'src/app/interfaces/beer';

@Component({
  selector: 'app-beer-container',
  templateUrl: './beer-container.component.html',
  styleUrls: ['./beer-container.component.scss']
})
export class BeerContainerComponent implements OnInit {


  Beers: Beer[] = [];

  constructor(public http: HttpClient) {
    this.http.get('https://api.punkapi.com/v2/beers').subscribe((data) => {
      this.Beers = data as Beer[];
    })
  }

  ngOnInit(): void {
    console.log(this.Beers[1].image_url);

  }

}
