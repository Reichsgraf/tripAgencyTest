import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { catchError } from 'rxjs/operators';

import { AuthService } from './core/authentication/services/auth.service';
import {AuthDialogComponent} from './core/authentication/auth-dialog.component';
import { TokenService } from './core/authentication/services/token.service';

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
          this.login(result);
      });
  }

  login(userInfo) {
    const [userName, password] = userInfo;
    // test, test1234
    if (!!userName && !!password) {
      return this.authService.login(userName, password)
        .pipe(
          catchError(error => {
            console.log(error);
            return error;
          })
        )
        .subscribe();
    }
  }

  logout() {
    return this.authService.logout();
  }

  isAuthenticated() {
    return !!this.tokenService.getToken();
  }
}
