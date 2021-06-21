import express from 'express'
import Room from './RoomsSchema.js'
import Hotel from './HotelSchema.js'
import Booking from '../User/BoookingSchema.js'
const app = express()


//function for add rooms
export const addRoom =  (req, res, next) => {
    Room.create(req.body)
    .then( room => {
        Hotel.find({name:req.body.hotel})
        .then(hotels => hotels.forEach(element => {
            element.rooms.push('')
          
        }) )
        
    })
    .then( room => {
        res.status(200).send(room);
    }).catch(next);  
    

}

// function for update rooms

export const updateRoom = (req, res, ) =>{
    Room.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Room.findOne({_id: req.params.id})
        .then( room => {
            res.status(200).send(room);
        });
    });
}

// function for add hotels

export const addHotel = (req,res, next) => {
    Hotel.create(req.body)
    .then( hotel => {
        res.status(200).send(hotel);
    }).catch(next)
}

// function for update of hotels

export const updateHotel = (req, res, next)=>{
    Hotel.findByIdAndUpdate({_id: req.params.id},req.body)
    .then(() => {
        Hotel.findOne({_id: req.params.id})
        .then( hotel => {
            res.status(200).send(hotel)
        })
    })
}


// get list of all customers
export const getBookingList = (req, res) => {
    Booking.find()
    .then( data => res.status(200).send(data))
}   