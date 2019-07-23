import { Component, Input } from '@angular/core';
import { Trip } from '../../../shared/models/trip.interface';

@Component({
  selector: 'detailed-trips-item',
  styleUrls: ['detailed-trips-item.component.scss'],
  templateUrl: 'detailed-trips-item.component.html'
})
export class DetailedTripsItemComponent {
  panelOpenState: boolean;
  image: string;

  @Input()
  detailedTrip: Trip;

  @Input()
  index: number;

  constructor() {}

  getDate(date: string) {
    return new Date(date);
  }
}

