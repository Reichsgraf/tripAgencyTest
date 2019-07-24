import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { TokenService } from '../../services/token.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenService
  ) {}

  canActivate() {
    const accessKey = this.tokenService.getToken();
    if (!accessKey) {
      this.router.navigate(['/home']);
    }
    return !!accessKey;
  }
}
