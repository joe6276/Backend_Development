import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Booking } from "src/app/Interfaces";
import { addbookingFail, addbookingSuccess, deleteBookingFail, deleteBookingSuccess, getBookingFail, getBookingsSuccess, getsingleBookingId, updateBookingFail, updateBookingSuccess } from "../Actions/bookingActions";

export interface BookingInterface{
bookings:Booking[]
bookingId:string
error:string
addSuccess:string
addError:string
updateError:string
deleteSuccess:string
deleteError:string
}

const initialState:BookingInterface={
    bookings:[],
    bookingId:'',
    error:'',
    addSuccess:'',
    addError:'',
    updateError:'',
    deleteSuccess:'',
    deleteError:'',
}

const bookingSliceState= createFeatureSelector<BookingInterface>('booking')

export const myBookings= createSelector(bookingSliceState, state=>state.bookings)
const myBookingsId= createSelector(bookingSliceState, state=>state.bookingId)


export const getSingleBooking=createSelector(myBookings,myBookingsId,(state,id)=>{
    return state.find(x=>x.Id===id)
})

export const bookingReducer=createReducer<BookingInterface>(
    initialState,
    on(getBookingsSuccess, (state,actions):BookingInterface=>{
       return {
        ...state,
        error:'',
        bookings:actions.bookings
       } 
    })
    ,  on(getBookingFail, (state,actions):BookingInterface=>{
        return {
         ...state,
         bookings:[],
        error:actions.error
        } 
     }),
     on(getsingleBookingId,(state,actions):BookingInterface=>{
        return{
            ...state,
            bookingId:actions.id
        }
     }),
     on(addbookingSuccess,(state,actions):BookingInterface=>{
        return{
            ...state,
            addError:'',
            addSuccess:actions.message.message
        }
     }),
     on(addbookingFail,(state,actions):BookingInterface=>{
        return{
            ...state,
            addError:actions.error,
            addSuccess:''
        }
     }),
     on(updateBookingSuccess,(state,action):BookingInterface=>{

        const updatedBooking=state.bookings.map(item=>{
            return item.Id===action.booking.Id?action.booking:item
        })

        return{
            ...state,
            updateError:'',
            bookings:updatedBooking
        }
     }),
     on(updateBookingFail,(state,action):BookingInterface=>{
        return{
            ...state,
            updateError:action.error
        }
     }),
     on(deleteBookingSuccess,(state,action):BookingInterface=>{
        return {
            ...state,
            deleteError:'',
            deleteSuccess:action.message.message
        }
     }),
     on(deleteBookingFail,(state,action):BookingInterface=>{
        return {
            ...state,
            deleteError:action.error,
            deleteSuccess:''
        }
     })
)