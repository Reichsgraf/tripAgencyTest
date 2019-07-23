import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { MaterialModule } from '../material-module';

import { ModulesRoutingModule } from './modules-routing.module';
import { AuthGuard } from '../core/authentication/guards/auth.guard';
import { TripService } from './shared/services/trip.service';
import { HomeComponent } from './home/home.component';
import { TripsResolver } from './shared/resolvers/trips.resolver';
import { TripsItemComponent } from './home/trips-item/trips-item.component';
import { DetailedTripsComponent } from './detailed-trips/detailed-trips.component';
import { DetailedTripsResolver } from './shared/resolvers/detailed-trips.resolver';
import { DetailedTripsItemComponent } from './detailed-trips/detailed-trips-item/detailed-trips-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    TripsItemComponent,
    DetailedTripsComponent,
    DetailedTripsItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CarouselModule,
    WavesModule,
    ModulesRoutingModule
  ],
  providers: [
    TripService,
    TripsResolver,
    DetailedTripsResolver,
    AuthGuard
  ]
})
export class ModulesModule {}
