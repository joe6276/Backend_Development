import { createAction, props } from "@ngrx/store";
import { AddBooking, Booking, Message } from "src/app/Interfaces";


export const getBookings = createAction('[Booking]-getBookings')

export const getBookingsSuccess = createAction('[Booking]-getBookingsSuccess', props<{bookings:Booking[]}>())

export const getBookingFail= createAction('[Booking]-getBookingFail',props<{error:string}>())

export const getsingleBookingId= createAction('[Single-Booking]-getSingleBookingId',props<{id:string}>())




export const addbooking = createAction('[addbooking]-addbooking',props<{newbooking:AddBooking}>())

export const addbookingSuccess = createAction('[addbooking]-addbookingSuccess', props<{message:Message}>())

export const addbookingFail= createAction('[addbooking]-addbookingFail',props<{error:string}>())



export const updateBooking = createAction('[updateBooking]-updateBooking',props<{updatedBooking:AddBooking, id:string}>())

export const updateBookingSuccess = createAction('[updateBooking]-updateBookingSuccess', props<{booking:Booking}>())

export const updateBookingFail= createAction('[updateBooking]-updateBookingFail',props<{error:string}>())



export const deleteBooking = createAction('[deleteBooking]-deleteBooking',props<{id:string}>())

export const deleteBookingSuccess = createAction('[deleteBooking]-deleteBookingSuccess', props<{message:Message}>())

export const deleteBookingFail= createAction('[deleteBooking]-deleteBookingFail',props<{error:string}>())