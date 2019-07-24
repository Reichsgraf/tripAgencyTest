import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { pluck, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { User } from '../../../shared/models/user.interface';
import { TokenService } from '../../services/token.service';


@Injectable()
export class AuthService {
  isAuthenticated$ = new Subject<User>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {}

  login(userName: string, password: string) {
    const request = { userName, password };
    return this.http.post('/api/TripAgency/Login', request)
      .pipe(
        pluck('accessToken'),
        tap((accessToken: string) => {
          this.tokenService.setToken(accessToken);
          this.isAuthenticated$.next({ userName, password });
        })
      );
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigate(['/home']);
  }
}
