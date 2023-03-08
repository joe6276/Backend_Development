import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from 'src/app/Services/booking.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { ShowFormAction } from 'src/app/State/Actions/sampleActions';
import { addbooking, getBookings } from 'src/app/State/Actions/bookingActions';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/Interfaces';
import { myBookings } from 'src/app/State/Reducers/bookingReducer';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  show=false
  form!:FormGroup
  booking$!:Observable<Booking[]>
  paint= performance.getEntriesByType('paint')
   paintingTimng= performance.getEntriesByType('paint')
  fcp= this.paintingTimng.find(({name})=> name ==='first-contentful-paint')
  fmp=this.paint.find(({name})=>name==='first-contentful-paint')
  constructor(private fb:FormBuilder,public auth:AuthService, private router:Router, private store:Store<any>){}
  ngOnInit(): void {
    this.form = this.fb.group({
      Destination:[null, [Validators.required, Validators.email]],
      TravelDate:[null, Validators.required]
    })
    // this.bookingService.getUserBooking()
    this.booking$=this.store.select(myBookings)
    this.store.dispatch(getBookings())
    this.store.select('sample').subscribe(state=>{
      // console.log(state);
      this.show= state.showForm
    })
    if(this.fcp){
      console.log(`it took ${this.fcp.startTime} ms to start this page`);
      
    }
  }

  submitForm(){
      this.store.dispatch(addbooking({newbooking:this.form.value}))
      this.store.dispatch(getBookings())   
    
  }
  showForm(){
  // this.show=!this.show
    this.store.dispatch(ShowFormAction())
  }
  ShowMore(){
  this.router.navigate(['/book'])
  }
}
