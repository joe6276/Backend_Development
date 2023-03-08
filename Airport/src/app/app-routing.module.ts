import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './Services/auth-guard.service';

const routes: Routes = [
  {path:'', loadComponent:()=>import('./home/home.component').then(c=>c.HomeComponent)},
  {path:'register', loadComponent:()=>import('./Auth/register/register.component').then(c=>c.RegisterComponent)},
  {path:'login',  loadComponent:()=>import('./Auth/login/login.component').then(c=>c.LoginComponent)},
  {path:'book',  loadComponent:()=>import('./Bookings/booking/booking.component').then(c=>c.BookingComponent)},
  {path:'book/:id', canActivate:[AuthGuardService], loadComponent:()=>import('./Bookings/single-booking/single-booking.component').then(c=>c.SingleBookingComponent)},
  {path:'book/:id/edit', canActivate:[AuthGuardService], loadComponent:()=>import('./Bookings/update-booking/update-booking.component').then(c=>c.UpdateBookingComponent)},
  {path:'**', loadComponent:()=>import('./page-not-found/page-not-found.component').then(c=>c.PageNotFoundComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
