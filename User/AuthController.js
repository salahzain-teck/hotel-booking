import User from './User.js';
import bcrypt from 'bcrypt';


export const register = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPass) =>{
        if(err){
            res.json({
                error:err
            })
        }

        let user = new User ({
            name : req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
        user.save()
        .then
        (user => {
            res.json({
                message: 'User registration is successfull!'
            }) 
        })
        .catch(error => {
            res.json({
                message:'An error occuared '
            }) 
        })
    })
}



export const logIn = (req, res)=>{

    let password = req.body.password
    let userData = req.body
   
   
    User.findOne ({email : userData.email })
    .then(user => {
      
        if(user){
             bcrypt.compare( password, user.password).then((result)=> {
              
                if(result){
                   
                    res.json({
                        message:'Login Succefull',
                       
                    })
                }else{       
                    res.json({
                        message: 'Password does not matched'
                    })
                }
                 
            })
        }else{
            res.json({
                message: 'No user found'
            })
        }
        
    })
}
