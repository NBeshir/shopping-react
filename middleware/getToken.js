const jwt = require('jsonwebtoken');
const config = require('config');




export const getToken=(user)=>{
    jwt.sign(
       {id:user._id},
       config.get('jwtSecret')
   )
       res.status(200).json({
           msg:"Successfully Registered!",
           token,
           user: {
               id:user.id,
               fname:user.fname,
               lname:user.lname,
               email:user.email,
           }
       })
       
   

}
