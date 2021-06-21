import mongoose from 'mongoose'
const Schema   = mongoose.Schema

const adminSchema = new Schema({
    name: {
        type:String
    },
    email: {
        type:String
    },
    phone: {
        type:String
    },
    password: {  
        type:String
    }
},{timestamps: true})

const Admin = mongoose.model('Admin',adminSchema)
export default Admin