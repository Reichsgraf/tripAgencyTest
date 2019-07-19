import { Component } from '@angular/core';
import { AuthService } from './core/authentication/services/auth.service';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authService: AuthService
  ) {}

  login() {
    return this.authService.login('test', 'test1234')
      .pipe(
        catchError(error => {
          console.log(error);
          return error;
        })
      )
      .subscribe();
  }
}
