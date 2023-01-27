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

//   .get((req, res, next) => {
//  Coffee.findOne({_id:req.params.id})
//  .then(item =>{

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.json(item)
//  })

//  .catch((err) => next(err));
// //  res.status(404).send({ message: 'Item Not Found.' });
// })

// shopRouter
// .route("/:id")

//   .get((req, res, next) => {
//     // if (req.params.id.match(/^[0-9a-fA-F]{24}$/))
//  Coffee.findById({id:req.params.id},
//  (error, data) => {
//   if(error) {
//       return next(error)
//   } else {
//        res.json(data)
      
//   }
//  })
//})


//   Coffee.findOne({ id: req.params.id })
//   .then(item =>{
//     console.log('shop route', item)
//     res.send(item );
//   })
//     .catch((err) => next(err));
  
// })
// .get((req, res, next) => {
//   const coffee= Coffee.findOne({ id: req.params.id })
    // .then((coffee => {
     
    //    JSON.parse(coffee),
      // items: coffee
      // stripePublicKey: stripePublicKey,
    // res.json(coffee)
//     console.log(coffee)
     
// })
    
//     .catch((err) => next(err));
// })

.get(async(req, res, next) => {

const product = await Coffee.findOne({ 
  _id: req.params.id });

if (product) {
  res.send(product);
} else {
  res.status(404).send({ message: 'Product Not Found.' });
}
})
  


.post(async(req,res,next)=>{
  const {
      product,
      price,
      quantity,
      image
} = req.body;


const cart = await Cart.create({
  product,
  price,
  quantity,
  image
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
