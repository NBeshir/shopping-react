
const express = require('express');

const {check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/user");
const config = require('config');
const router = express.Router();
const {getToken, auth} = require('../middleware/auth');



router.get('/', (req,res, next)=>{
    User.find()
    .then(user=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({user:user});   
    })
    .catch(err => next(err));

})


router.post('/',
[
    check('fname', "Please add your first name").not().isEmpty(),
    check('lname', "Please add your last name").not().isEmpty(),
    check('email', "Please include a valid email").isEmail(),
    check('password', "Please include a password with 6 or more characters").isLength({min: 6})
], async (req,res)=>{

    const errors = validationResult(req);
   
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    } 
    try{
    const {fname,lname, email, password} = req.body;
   
      let user = await User.findOne({email})

        if(user)
         return res.status(400).json({msg:'User already exists'});
        const hashedPassword = await bcrypt.hash(password, 10)

        // const newUser = new User({
        //  fname:fname,
        //  lname:lname,
        //  email:email,
        // password: hashedPassword
     user = await User.create({
            fname,
            lname,
            email,
           password: hashedPassword
    
})
// const savedUser = await newUser.save()
// const token = jwt.sign(
//     {id:savedUser._id},
//     config.get('jwtSecret')
// )
//     res.status(200).json({
//         msg:"Successfully Registered!",
//         token,
//         user: {
//             id:savedUser.id,
//             fname:savedUser.fname,
//             lname:savedUser.lname,
//             email:savedUser.email,
//         }
//     })
    
getToken(user)

}


catch(err){
    res.status(400).json({ error: err.message });
}


})





module.exports = router;





