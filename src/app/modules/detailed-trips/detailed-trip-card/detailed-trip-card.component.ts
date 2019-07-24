import { Component, Input } from '@angular/core';
import { DetailedTrip } from '../../../shared/models/detailed-trip.interface';


@Component({
  selector: 'detailed-trip-card',
  styleUrls: ['detailed-trip-card.component.scss'],
  templateUrl: 'detailed-trip-card.component.html'
})
export class DetailedTripCardComponent {
  panelOpenState: boolean;

  @Input()
  detailedTrip: DetailedTrip;

  @Input()
  index: number;

  constructor() {}
}

