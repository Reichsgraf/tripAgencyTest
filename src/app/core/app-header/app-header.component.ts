import { Component } from '@angular/core';
import { AuthService } from '../authentication/services/auth.service';

@Component({
  selector: 'app-header',
  styleUrls: ['app-header.component.scss'],
  templateUrl: 'app-header.component.html'
})
export class AppHeaderComponent {
  constructor(
    private authService: AuthService
  ) {}

  onLogin() {
    console.log('login');
  }
}
