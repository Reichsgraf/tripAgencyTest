import { Component, OnInit } from '@angular/core';
import { DetailedTrip } from '../../shared/models/detailed-trip.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'detailed-trips',
  styleUrls: ['detailed-trips.component.scss'],
  templateUrl: 'detailed-trips.component.html'
})
export class DetailedTripsComponent implements OnInit {
  detailedTrips: Array<DetailedTrip>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.detailedTrips = [...this.route.snapshot.data.detailedTrips] || [];
  }
}
