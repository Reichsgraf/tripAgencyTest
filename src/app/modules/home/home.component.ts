import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Trip } from '../../shared/models/trip.interface';

@Component({
  selector: 'home',
  styleUrls: ['home.component.scss'],
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  trips: Array<Trip>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.trips = [...this.route.snapshot.data.trips] || [];
  }
}
