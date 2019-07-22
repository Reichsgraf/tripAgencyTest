import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { TripService } from '../services/trip.service';
import { Trip } from '../../../shared/models/trip.interface';

@Injectable()
export class TripsResolver implements Resolve<Observable<Array<Trip>>> {
  constructor(private tripService: TripService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Trip>> {
    return this.tripService.getTrips();
  }
}
