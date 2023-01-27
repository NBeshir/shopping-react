const express = require("express");
const Order = require("../models/order");
const router = require("./SignupRoute");
const orderRouter = express.Router();


orderRouter.route('/')


.get(('/orders', ( async(req, res)=>{
    const orders = await Order.find({});
    res.send(orders)
})))

.post(('/orders',(async(req, res)=>{
    if (
        !req.body.name ||
        !req.body.email ||
        !req.body.address ||
        !req.body.total ||
        !req.body.cartItems
       
      
      ) 
      {
        return res.send({ message: "information is required." });
      }
    const order = await new Order(req.body)
    //   const order = await Order(req.body).save();
    //   res.send(order)
             await order.save()
             res.send(order)
      
})))
  // !req.body.total ||
        // !req.body.cartItems
module.exports = orderRouter;