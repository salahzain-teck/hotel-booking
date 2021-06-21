import Hotel from '../admin/HotelSchema.js'
import Room from '../admin/RoomsSchema.js'
import Booking from './BoookingSchema.js'

// function for get all rooms

export const getList = (req, res)=> {
     Room.find()
     .then(rooms => res.status(200).send(rooms));
} 
     

// function for new booking

export const bookRoom = (req, res, next) => {
   Booking.create(req.body)
   .then( booking =>{
       res.status(200).send(booking);
   }).catch(next)
}

// function for get list of booked rooms

export const getBooked = (req, res) => {
    Booking.find({hotel: req.body.hotel})
    .then( rooms => res.status(200).send(rooms))
}