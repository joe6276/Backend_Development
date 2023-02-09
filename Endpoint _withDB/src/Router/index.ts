import { Router } from "express";
import { addBooking, cancelBooking, getBookings, getOneBooking, updateBooking } from "../Controller/flightBookingController";

const router = Router()

router.get('', getBookings)
router.get('/:id', getOneBooking)
router.post('', addBooking)
router.put('/:id', updateBooking)
router.delete('/:id', cancelBooking)


export default router