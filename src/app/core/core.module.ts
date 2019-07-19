import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AuthService } from './authentication/services/auth.service';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule {}
