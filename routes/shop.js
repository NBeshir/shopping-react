const express = require("express");
const Coffee = require("../models/coffee");
const User = require("../models/user");
const Cart = require("../models/cart");
const shopRouter = express.Router();


shopRouter
  .route("/")

  .get((req, res, next) => {
    Coffee.find()
      .then((coffee => {
       
          // items: JSON.parse(coffee),
        // items: coffee
        // stripePublicKey: stripePublicKey,
      res.json(coffee)
       
  }))
      
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Coffee.create(req.body)
      .then((coffee) => {
        console.log("Coffee variety Created", coffee);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(coffee);
      })
      .catch((err) => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported ");
  })
  .delete((req, res, next) => {
    Coffee.deleteMany()
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });

shopRouter
.route("/:id")


 
.get(async(req, res, next) => {

const product = await Coffee.findOne({ 
  _id: req.params.id });

if (product ) {
  res.send(product);
 
} else {
  res.status(404).send({ message: 'Product Not Found.' });
}
})
  
// .get(async(req, res, next) => {

//   const cart = await Cart.findOne({ 
//     _id: req.params.id });
//     const item = await User.findOne({ 
//     _id: req.params.id });
  
//   if (item && item.cartItems.length>0) {
//     res.send(product);
   
//   } else {
//     res.status(404).send({ message: 'Product Not Found.' });
//   }
//   })
    

.post(async(req,res,next)=>{
  const {
     
      price,
    name,
      image,
      countInStock,
} = req.body;


const cart = await Cart.create({
 
  price,
 name,
  image,
  countInStock
});

res.status(200).json({
  success: true,
  cart,
});
})


  .put((req, res, next) => {
    Coffee.findByIdAndUpdate(
      req.params.coffeeId,
      {
        $set: req.body,
      },
      { new: true }
    ) //new :true to get information back about the update
      .then((coffee) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(coffee);
      })
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    Coffee.findByIdAndDelete(req.params.coffeeId)
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });
module.exports = shopRouter;
