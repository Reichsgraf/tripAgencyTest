import { NgModule } from '@angular/core';

import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AuthService } from './authentication/services/auth.service';
import { AuthDialogComponent } from './authentication/auth-dialog.component';
import { TokenService } from './authentication/services/token.service';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent
  ],
  entryComponents: [
    AuthDialogComponent
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent
  ],
  providers: [
    AuthService,
    TokenService
  ]
})
export class CoreModule {}
