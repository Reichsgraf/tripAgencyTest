import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Trip } from '../../shared/models/trip.interface';

@Component({
  selector: 'home',
  styleUrls: ['home.component.scss'],
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  slides = [
    { text: '1', imageUrl: 'assets/sliders/slider2.jpg'},
    { text: '2', imageUrl: 'assets/sliders/slider3.jpg'},
    { text: '3', imageUrl: 'assets/sliders/slider4.jpg'},
  ];
  trips: Array<Trip>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    if (!this.route.snapshot.data.trips.isEmpty) {
      this.trips = this.route.snapshot.data.trips;
    }
  }
}
