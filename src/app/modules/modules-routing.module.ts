import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/authentication/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { TripsResolver } from './shared/resolvers/trips.resolver';
import { DetailedTripsComponent } from './detailed-trips/detailed-trips.component';
import { DetailedTripsResolver } from './shared/resolvers/detailed-trips.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      trips: TripsResolver,
    }
  },
  {
    path: 'trips',
    component: DetailedTripsComponent,
    canActivate: [AuthGuard],
    resolve: {
      detailedTrips: DetailedTripsResolver,
    }
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModulesRoutingModule {}
