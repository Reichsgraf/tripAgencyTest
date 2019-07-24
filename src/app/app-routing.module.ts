import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {TripsResolver} from './modules/shared/resolvers/trips.resolver';
import {DetailedTripsComponent} from './modules/detailed-trips/detailed-trips.component';
import {AuthGuard} from './core/authentication/guards/auth.guard';
import {DetailedTripsResolver} from './modules/shared/resolvers/detailed-trips.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
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
export class AppRoutingModule {}
