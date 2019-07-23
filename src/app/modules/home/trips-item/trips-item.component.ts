import {Component, Input, OnInit} from '@angular/core';

import { Trip } from '../../../shared/models/trip.interface';

@Component({
  selector: 'trips-item',
  styleUrls: ['trips-item.component.scss'],
  templateUrl: 'trips-item.component.html'
})
export class TripsItemComponent implements OnInit {
  image: string;

  @Input()
  trip: Trip;

  constructor() {}

  ngOnInit() {
    this.image = `url(${this.trip.imageUrl})`;
  }

  getDate(date: string) {
    return new Date(date);
  }
}
