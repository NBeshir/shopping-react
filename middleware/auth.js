const jwt = require('jsonwebtoken');
const config = require('config');
const catchErrors = require('./catchErrors');



// export const isAuthenticatedUser = catchErrors(async (req,res,next) =>{
//     const { token } = req.cookies;

//   if (!token) {
//     return next(new ErrorHandler("Please Login for access this resource", 401));
//   }

//   const decodedData = jwt.verify(token,  config.get('jwtSecret'));

//   req.user = await User.findById(decodedData.id);

//   next();
// });

const getToken=(user)=>{
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



const isAuthenticatedUser = (req,res,next)=>{
//get token from header

//const token = req.header('authorization');
const token = req.header('x-auth-token');

// check if not token
if(!token){
    return res.status(401).json({msg: 'No token, authorization denied!'})
}
try{
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    //console.log(decoded)
    //add user from payload
    req.user = decoded //pulling out the payload and set the user in the payload to req.user so we can have access to it in the route
    next();
}catch(err){
    res.status(401).json({msg:'Token is not valid!'})
}
}
 
module.exports= { getToken, isAuthenticatedUser };