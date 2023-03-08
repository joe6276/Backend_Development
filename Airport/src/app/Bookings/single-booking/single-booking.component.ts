import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking } from 'src/app/Interfaces';
import { BookingService } from 'src/app/Services/booking.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Observable} from 'rxjs'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/State/appState';
import { getSingleBooking } from 'src/app/State/Reducers/bookingReducer';
import { deleteBooking, getsingleBookingId } from 'src/app/State/Actions/bookingActions';
@Component({
  selector: 'app-single-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-booking.component.html',
  styleUrls: ['./single-booking.component.css']
})
export class SingleBookingComponent implements OnInit {
  booking!:Booking
  id!:string
  constructor(private route:ActivatedRoute, private router:Router ,private store:Store<AppState>){}
  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{
      this.id=param['id']
      this.store.dispatch(getsingleBookingId({id:param['id']}))
    })
    
    this.store.select(getSingleBooking).subscribe(response=>{
      if(response){
        this.booking=response
      }
    })
  }
  Update(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
  Delete(){
    // this.bookingService.deleteBooking(this.id).subscribe() Todo
    this.store.dispatch(deleteBooking({id:this.id}))
    this.router.navigate(['../'],{relativeTo:this.route})
  }
}
