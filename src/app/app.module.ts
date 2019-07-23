import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material-module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiPrefixInterceptor} from './core/authentication/interceptors/api-prefix.interceptor';
import { AuthDialogComponent } from './core/authentication/auth-dialog.component';
import { TokenInterceptor } from './core/authentication/interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AuthDialogComponent
  ],
  entryComponents: [
    AuthDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ModulesModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
