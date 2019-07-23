import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { TripService } from '../services/trip.service';
import { DetailedTrip } from '../../../shared/models/detailed-trip.interface';

@Injectable()
export class DetailedTripsResolver implements Resolve<Observable<Array<DetailedTrip>>> {
  constructor(private tripService: TripService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<DetailedTrip>> {
    return this.tripService.getDetailedTrips();
  }
}
