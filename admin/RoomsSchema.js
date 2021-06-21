import mongoose from 'mongoose'
const Schema   = mongoose.Schema

const roomSchema = new Schema({
    hotel: {
        type: String
    },
    number: {
        type: String,
        required: [true,]
    },
    type: {
        type: String,
        required: [true,]
    },
    price: {
        type: Number,
        required: [true,]
    },
    maxGuests: {
        type: Number,
        required: [true, ]
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
    
})

const Room = mongoose.model('Room',roomSchema);
export default Room  