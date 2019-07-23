import { Component, Input } from '@angular/core';
import { DetailedTrip } from '../../../shared/models/detailed-trip.interface';


@Component({
  selector: 'detailed-trips-item',
  styleUrls: ['detailed-trips-item.component.scss'],
  templateUrl: 'detailed-trips-item.component.html'
})
export class DetailedTripsItemComponent {
  panelOpenState: boolean;

  @Input()
  detailedTrip: DetailedTrip;

  @Input()
  index: number;

  constructor() {}

  getDate(date: string) {
    return new Date(date);
  }
}

