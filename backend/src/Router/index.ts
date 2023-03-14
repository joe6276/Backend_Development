import { Router } from "express";
import { addBooking, cancelBooking, getBookings, getbyEmail, getOneBooking, updateBooking } from "../Controller/flightBookingController";
import { VerifyToken } from "../Middlewares/VerifyToken";

const router = Router()

router.get('', VerifyToken, getBookings)
router.get('/:id',VerifyToken, getOneBooking)
router.post('',VerifyToken, addBooking)
router.get('/booking/emails',VerifyToken, getbyEmail)
router.put('/:id',VerifyToken, updateBooking)
router.delete('/:id', cancelBooking)


export default router