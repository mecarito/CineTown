import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { AccountModule } from './modules/account/account.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { GlobalInterceptor } from './modules/shared/interceptors/global-interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    DashboardModule,
    SharedModule,
    AccountModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: GlobalInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
