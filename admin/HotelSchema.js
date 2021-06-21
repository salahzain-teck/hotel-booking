import mongoose from 'mongoose'
const Schema   = mongoose.Schema



const HotelSchema = new Schema({
    name: {
        type: String,
        required: [true]
    },
    stars: {
        type: Number 
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    rooms: [{type: Schema.Types.ObjectId, ref: 'Room'}]
});

const Hotel = mongoose.model('Hotel', HotelSchema);

export default  Hotel;