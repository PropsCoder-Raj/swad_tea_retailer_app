import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { IncentiveComponent } from './incentive/incentive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorInterceptor } from './_helper/other/jwt-interceptor.interceptor';
import { ErrorInterceptorInterceptor } from './_helper/other/error-interceptor.interceptor';
import { AuthService } from './_helper/auth/auth.service';
import { ApiService } from './_helper/api/api.service';
import { UserService } from './_helper/user/user.service';
import { DataService } from './_helper/data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    IncentiveComponent,
    LoginComponent
  ],
  entryComponents: [

  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
    NgChartsModule,
  ],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy ,
    },AuthService, ApiService, UserService, DataService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorInterceptor, multi: true },
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
