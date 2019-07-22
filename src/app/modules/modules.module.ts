import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material-module';
import { TripService } from './shared/services/trip.service';
import { TripsResolver } from './shared/resolvers/trips.resolver';
import { TripsItemComponent } from './home/trips-item/trips-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      trips: TripsResolver,
    }
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    TripsItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CarouselModule,
    WavesModule
  ],
  providers: [
    TripService,
    TripsResolver
  ]
})
export class ModulesModule {}
