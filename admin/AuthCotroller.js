import Admin from './Admin.js'
import bcrypt from 'bcrypt'



export const adminRegister = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPass) =>{
        if(err){
            res.json({
                error:err
            })
        }

        let admin= new Admin ({
         
            name : req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
        admin.save()
        .then
        (admin => {
            res.json({
                message: 'Admin registration is successfull!'
            }) 
        })
        .catch(error => {
            res.json({
                message:'An error occuared '+ error
            }) 
        })
    })
}
  



export const adminLogIn = (req, res)=>{

    let password = req.body.password
    let email = req.body.email

    Admin.findOne ({email : email })
    .then(admin =>{
        if(admin){
             bcrypt.compare(password, admin.password, function(err,result) {
                if(err){
                    res.json({
                        error:err
                    })
                }
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
                message: 'No admin found'
            })
        }
        
    })
}