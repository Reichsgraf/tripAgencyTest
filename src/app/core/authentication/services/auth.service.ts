import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../../../shared/models/user.interface';
import {pluck, tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
  isAuthenticated$ = new Subject<User>();

  constructor(
    private http: HttpClient
  ) {}

  login(userName: string, password: string) {
    const request = { userName, password };
    return this.http.post('/api/TripAgency/Login', request)
      .pipe(
        pluck('accessToken'),
        tap((accessToken: string) => {
          console.log(accessToken);
          this.isAuthenticated$.next({ userName, password });
          // token service .setToken(accessToken)?
        })
      );
  }

  logout() {

  }
}
