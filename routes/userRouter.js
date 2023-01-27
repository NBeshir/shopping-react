const express = require("express");
const User = require("../models/coffee");
const userRouter = express.Router();
const jsonwebtoken = require("jsonwebtoken");
const {getToken, auth} = require('../middleware/auth');

userRouter.route('/')

// .get((req, res, next)=>{
//     User.find()
//     .then(user =>{
//         res.json(user)
//     })
//     .catch((err) => next(err));
// })

// .post((req, res, next)=>{
//     User.findById()
//     .then(user =>{
//         res.json(user)
//     })
//     .catch((err) => next(err));
// })

// userRouter.route('/:userId')

// .get((req, res, next)=>{
//     User.findById(req.param.userId)
//     .then(user =>{
//         res.json(user)
//     })
//     .catch((err) => next(err));
// })

// .post((req, res, next)=>{
//     User.findById(req.param.userId)
//     .then(user =>{
//         res.json(user)
//     })
//     .catch((err) => next(err));
// })
.get((req, res, next)=>{
    User.find()
    .then(user =>{
        res.json(user)
    })
    .catch((err) => next(err));
})

.post(async (req, res, next)=>{
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      if (signinUser) {
        res.send({
          _id: signinUser._id,
          name: signinUser.name,
          email: signinUser.email,
         
          token: getToken(signinUser),
        });
    } else{
  
        res.status(401).send({ message: 'Invalid Email or Password.' });
      }
    
    
});

module.exports = userRouter;