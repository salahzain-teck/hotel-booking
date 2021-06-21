import mongoose from 'mongoose'
const Schema   = mongoose.Schema

const BookingSchema = new Schema({
    name:{
        type:String
    },
    phone:{
        type:String
    },
    hotel: {
        type: String
    },
    checkin: {
        type: Date,
        required: [true, ]
    },
    checkout: {
        type: Date,
        required: [true, ]
    },
   
   
    nights: {
        type: Number,
        required: [true, ]
    },
    adults: {
        type: Number
    },
    children: {
        type: Number,
        default: 0
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking;