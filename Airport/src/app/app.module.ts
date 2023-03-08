import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS } from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { StoreModule } from '@ngrx/store';
import { sampleReducer } from './State/Reducers/sample';
import { CounterReducer } from './State/Reducers/counterReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { bookingReducer } from './State/Reducers/bookingReducer';
import { BookingsEffect } from './State/Effects/BookingEffects';
import { userReducer } from './State/Reducers/userReducer';
import { UserEffects } from './State/Effects/userEffects';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({sample:sampleReducer, counter:CounterReducer, booking:bookingReducer, user:userReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([BookingsEffect,UserEffects])
  ],
   providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
