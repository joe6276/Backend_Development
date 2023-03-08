import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, of } from "rxjs";
import { BookingService } from "src/app/Services/booking.service";
import  * as BookingsActions from '../Actions/bookingActions'

@Injectable()
export class BookingsEffect{

    constructor(private bookingService:BookingService,private actions$:Actions ){}

    loadBookings=createEffect(()=>{
        return this.actions$.pipe(
            ofType(BookingsActions.getBookings),
            mergeMap(()=>{
               return this.bookingService.getUserBooking().pipe(
                    map(bookings=>{
                        return BookingsActions.getBookingsSuccess({bookings})
                    }),
                    catchError(error=>of(BookingsActions.getBookingFail({error:error.message})))
                )
            })
        )
    })

    addBooking = createEffect(()=>{
    return this.actions$.pipe(
        ofType(BookingsActions.addbooking),
        concatMap(action=>{
            return this.bookingService.addBooking(action.newbooking).pipe(
                map(successResponse=>{
                    return BookingsActions.addbookingSuccess({message:successResponse})
                }),
                catchError(error=>of(BookingsActions.addbookingFail({error:error.message})))
            )
        })
    )
    })


    updateBooking= createEffect(()=>{
        return this.actions$.pipe(
            ofType(BookingsActions.updateBooking),
            concatMap(action=>{
                return  this.bookingService.updateBooking(action.id,action.updatedBooking).pipe(
                    map(successresponse=>{
                        return BookingsActions.updateBookingSuccess({booking:successresponse})
                    }),
                    catchError(error=>of(BookingsActions.addbookingFail({error:error.message})))
                )
            })
        )
    })

deleteBooking= createEffect(()=>{
    return this.actions$.pipe(
        ofType(BookingsActions.deleteBooking),
        concatMap(action=>{
           return this.bookingService.deleteBooking(action.id).pipe(
                map(successResponse=>{
                    return  BookingsActions.deleteBookingSuccess({message:successResponse})
                }),
                catchError(error=>of(BookingsActions.deleteBookingFail({error:error.message})))
            )
        })
    )
})

}