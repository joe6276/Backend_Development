import { RequestHandler,Request,Response } from 'express'
import {v4 as uid} from 'uuid'
import { bookingSchema } from '../Helpers'
import { Booking, DecodedData } from '../Models'
import { DatabaseHelper } from '../DatabaseHelpers'
const _db= new DatabaseHelper()
interface ExtendedRequest extends Request{
    body:{Name:string,Email:string,Destination:string, TravelDate:string},
    params:{id:string},
    info?:DecodedData
}
//Get booking Details
export const getBookings:RequestHandler=async (req,res)=>{
   try {
      const bookings:Booking[] = await (await _db.exec('getFlights')).recordset
     res.status(200).json(bookings)
   } catch (error) {
    res.status(500).json(error)
   }

}
//Get one booking
export const getOneBooking=async(req:ExtendedRequest,res:Response)=>{
try {
  const id = req.params.id
  const booking:Booking= await (await  _db.exec('getFlightBookings', {id})).recordset[0]
  if(!booking){
     return res.status(404).json({error:'Booking Not Found'})
  }

  return res.status(200).json(booking)

} catch (error) {
  return res.status(500).json(error)
}

}

export const getbyEmail=async(req:ExtendedRequest,res:Response)=>{
  try {
     if(req.info){
      const booking:Booking[]= await (await  _db.exec('getByEmail', {email:req.info.Email})).recordset
      if(!booking[0]){
         return res.status(404).json({error:'Booking Not Found'})
      }
    
     return  res.status(200).json(booking)
     }
    
  
  } catch (error) {
    res.status(500).json(error)
  }
  
  }
 export async function addBooking( req:ExtendedRequest, res:Response) {
  try {
    const id =uid()
    const {TravelDate,Destination}= req.body
    

    
    // if(error){
    //   return res.status(422).json(error.details[0].message)
    // }
   if(req.info){
    _db.exec('InsertOrUpdate', 
    {id,name:req.info.Name, email:req.info.Email, destination:Destination,date:TravelDate})

   return  res.status(201).json({message:'Booking Added'})
   }
  } 
  catch (error:any) {
     return res.status(500).json(error.message)
  }
 }


//Update Booking


export async function updateBooking(req:ExtendedRequest,res:Response){
try {
const {TravelDate,Destination}= req.body
     const booking:Booking= await (await _db.exec('getFlightBookings',{id:req.params.id})).recordset[0]

  if(req.info){
    if(booking){
      await _db.exec('InsertOrUpdate', {id:req.params.id,name:req.info.Name, email:req.info.Email, destination:Destination, date:TravelDate})
      return res.status(200).json({message:'Updated'})
    }
  }

  return res.status(404).json({error:'Booking Not Found'}) 
     
  } 

catch (error:any) {
   res.status(500).json(error.message)
}
}


//delete


export const cancelBooking=async(req:ExtendedRequest, res:Response)=>{
  try {
    const booking:Booking= await (
    await _db.exec('getFlightBookings',{id:req.params.id})
  ).recordset[0]
    if(booking){
          await _db.exec('deleteFlightBookings',{id:req.params.id})
        return res.status(200).json({message:'Deleted'})
    }
  return res.status(404).json({error:'Booking Not Found'})  
  } catch (error:any) {
    res.status(500).json(error.message)
  }
}