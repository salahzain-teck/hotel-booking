
import express from 'express'
import mongoose from 'mongoose'
import {logIn} from './User/AuthController.js'
import {register} from './User/AuthController.js'
import { adminRegister } from './admin/AuthCotroller.js'
import { adminLogIn } from './admin/AuthCotroller.js'
import { addRoom ,addHotel, updateRoom, updateHotel,getBookingList} from './admin/AddRooms.js'
import { bookRoom, getBooked, getList } from './User/BookRoom.js'

const app = express()
const port = process.env.PORT || 9000  
   
app.use(express.json());

const connection_url ='mongodb+srv://admin:sGVS7C4QBfC2BYVY@cluster0.fd6bs.mongodb.net/test-db?retryWrites=true '

mongoose.connect(connection_url,{   
    useCreateIndex:true,
    useNewUrlParser: true,     
    useUnifiedTopology:true
})      

export const db = mongoose.connection;   


db.once("open", ()=> {  
    console.log("DB connected")

const userCollection = db.collection('users')  
const changeStream =  userCollection.watch();
changeStream.on("change", (change)=>{
    console.log('A change occured',change);
})
   
})

app.get('/',(req, res)=>res.status(200).send('hello world'))

 // customer register & login
 app.post('/register',register)
 app.post ('/login',logIn)

//admin login 
 app.post('/admin-register',adminRegister);
 app.post('/admin-login', adminLogIn)
 
// add rooms
app.post('/add-room',addRoom);

// add hotels
app.post('/add-hotel', addHotel);

// get list of all cutomers
app.get('/get-customers',getBookingList)

// set availabilty of room
app.put('/update-room',updateRoom)

// set availabilty of hotels
app.put('/update-hotel', updateHotel);

// show available room
app.get('/get-list',getList);

//book a room
app.post('/book-room', bookRoom);

//show list of booked room    
app.get('/get-booked',getBooked)


// listen 
app.listen(port,()=> console.log(`Listening  on localhost : ${port}`))





  

 