import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from 'src/app/Services/booking.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppState } from 'src/app/State/appState';
import { Store } from '@ngrx/store';
import { getSingleBooking } from 'src/app/State/Reducers/bookingReducer';
import { updateBooking } from 'src/app/State/Actions/bookingActions';

@Component({
  selector: 'app-update-booking',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent {
  show=false
  id!:string
  form!:FormGroup
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private router:Router, private store:Store<AppState>){

  }

  ngOnInit(): void {
     
    this.form = this.fb.group({
      Destination:[null, [Validators.required, Validators.email]],
      TravelDate:[null, Validators.required]
    })
    // this.bookingService.getUserBooking()

    this.route.params.subscribe((param:Params)=>{
      this.id=param['id']
      })

      this.store.select(getSingleBooking).subscribe(res=>{
        if(res){
          let date =new Date(res.TravelDate).toISOString().slice(0,10)         
          this.form.setValue({
            Destination:res.Destination,
            TravelDate:date
        })
        }
      })
    
  }

  submitForm(){
    // this.bookingService.updateBooking(this.id, this.form.value).subscribe()
    this.store.dispatch(updateBooking({updatedBooking:this.form.value, id:this.id}))
    this.router.navigate(['../'],{relativeTo:this.route})
    // this.bookingService.getUserBooking()
    
  }
}
