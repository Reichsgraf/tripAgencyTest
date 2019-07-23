import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';

import { TokenService } from './core/authentication/services/token.service';
import { AuthService } from './core/authentication/services/auth.service';
import { AuthDialogComponent } from './core/authentication/auth-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string;
  password: string;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  loginDialog() {
    const dialogRef = this.dialog.open(
      AuthDialogComponent, {
        width: '250px',
        data: { userName: this.userName, password: this.password }
      });
    dialogRef.afterClosed()
      .subscribe(result => {
          if (!!result) {
            this.login(result);
          }
      });
  }

  login(userInfo) {
    const [userName, password] = userInfo;
    if (!!userName && !!password) {
      return this.authService.login(userName, password)
        .pipe(
          catchError(error => {
            return error;
          })
        )
        .subscribe(
          () => this.router.navigate(['/trips'])
        );
    }
  }

  logout() {
    return this.authService.logout();
  }

  isAuthenticated() {
    return !!this.tokenService.getToken();
  }
}
