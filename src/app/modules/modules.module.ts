import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { MaterialModule } from '../material-module';

import { AuthGuard } from '../core/authentication/guards/auth.guard';
import { TripService } from './shared/services/trip.service';
import { HomeComponent } from './home/home.component';
import { TripsResolver } from './shared/resolvers/trips.resolver';
import { TripsItemComponent } from './home/trips-item/trips-item.component';
import { DetailedTripsComponent } from './detailed-trips/detailed-trips.component';
import { DetailedTripsResolver } from './shared/resolvers/detailed-trips.resolver';
import { DetailedTripCardComponent } from './detailed-trips/detailed-trip-card/detailed-trip-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    TripsItemComponent,
    DetailedTripsComponent,
    DetailedTripCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CarouselModule,
    WavesModule
  ],
  providers: [
    TripService,
    TripsResolver,
    DetailedTripsResolver,
    AuthGuard
  ]
})
export class ModulesModule {}
