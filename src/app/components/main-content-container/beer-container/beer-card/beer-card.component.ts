import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/interfaces/beer';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {


  @Input() name?: string;
  @Input() image_url?: string;
  @Input() tagline?: string;
  @Input() contributor?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
