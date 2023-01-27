const express = require('express');

const {check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/user");
const config = require('config');

const {auth, getToken} = require('../middleware/auth');

const signinRouter = express.Router();

signinRouter.route('/')

.get(async (req,res, next)=>{

    // const token = req.headers['x-auth-token'];
  //token is passed to the header so we can access the payload from there as req.user

    const user = await User.findById(req.user.id).select('-password'); //req.user.id-accessing the payload, because we assiged it to req.user in the auth middleware//avoiding password
  
    if (!user) {
      throw Error('User does not exist');
    // console.log('user',user)
    }
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return res.status(401).json({msg: "User is not find with this email & password"})
    }
      
  // }catch(err){
    
    
  //   res.status(400).json({msg:err.message})
  // }
  console.log('user user', user)
  getToken(user)
 }) 
 
.post( [
    check('email','Please inter the correct email ').isEmail(),
    check('password','password is required').exists()
  ], async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()})
    }
  
    const {email, password} = req.body;
    // const token = req.header('x-auth-token');
    // const decoded = jwt.verify(token, config.get('jwtSecret'));
    // req.user = decoded 
    
  try{
    
      let user = await User.findOne({email})
      //let user = await User.findById(decoded._id)
     // console.log('user', user)
      if(!user){
      return res.status(400).json({msg: "user does not exist"})
        
       
      }
      const isMatch = await bcrypt.compare(password, user.password)
      //console.log(password, user.password)
     // console.log(isMatch)
      if(isMatch){
        
      
    const token = jwt.sign({
      // username:user.username,
      
     id:user._id
     }, 
      config.get('jwtSecret'),
     {
       expiresIn:"1d"
     },
     
     )
   if(!token) throw Error('Couldn\'t sign the token');
  
   
    res.json({
        msg:"Login Success!", 
       
        token,
        user:{
          id:user._id,
          fname:user.fname,
         
          lname:user.lname,
          email:user.email
        }
      })
        
      
         
       
     }
    }
     catch (err) {
      res.status(400).json({ msg: err.message });
   
    }
   
     
    })
  
module.exports = signinRouter;