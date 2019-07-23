import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { Trip } from '../../../shared/models/trip.interface';
import { DetailedTrip } from '../../../shared/models/detailed-trip.interface';

@Injectable()
export class TripService {
  constructor(
    private http: HttpClient
  ) {}

  getTrips() {
    return this.http.get<Array<Trip>>('/api/TripAgency/Trips/Homepage?numberOfTrips=4')
      .pipe(
        catchError(() => of([]))
      );
  }

  getDetailedTrips() {
    return this.http.get<Array<DetailedTrip>>('/api/TripAgency/Trips')
      .pipe(
        catchError(() => of([]))
      );
  }
}
