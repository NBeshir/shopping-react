const express = require("express");

const Cart = require("../models/cart");
const Coffee = require("../models/coffee");
const cartRouter = express.Router();

cartRouter
.route("/")

.get((req, res, next) => {
  Cart.find()
    .then((item => {
     
        // items: JSON.parse(coffee),
      // items: coffee
      // stripePublicKey: stripePublicKey,
    res.json(item)
     
}))
    
    .catch((err) => next(err));
})
.post((req, res, next) => {
  Cart.create(req.body)
    .then((item) => {
      console.log("Coffee variety Created", coffee);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(item);
    })
    .catch((err) => next(err));
})

cartRouter
.route("/:id")


.get(async(req, res, next) => {
    const userId = req.params.id;
  
    try{
        let cart = await Cart.findOne({userId});
        if(cart && cart.items.length > 0){
            console.log('cart from cart route', cart.items)
            res.send(cart);
        }
        else{
            res.send(null);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
})

.post(async(req, res, next) => {

    const userId = req.params.id;
    const { productId, quantity } = req.body;

    try{
        let cart = await Cart.findOne({userId});
        let item = await Coffee.findOne({_id: productId});
        if(!item){
            res.status(404).send('Item not found!')
        }
      
        const price = item.price;
        const name = item.name;
        const image = item.image;
        
        if(cart){
         
            // if cart exists for the user
            let itemIndex = cart.items.findIndex(p => p.productId === productId);

            // Check if product exists or not
            if(itemIndex > -1)
            {
                let productItem = cart.items[itemIndex];
                productItem.quantity += quantity;
                cart.items[itemIndex] = productItem;
            }
            else {
                cart.items.push({ productId, name, image, quantity, price });
            }
            cart.total += quantity * price;
            cart = await cart.save();
            return res.status(201).send(cart);
        }
        else{
            // no cart exists, create one
            const newCart = await Cart.create({
                userId,
                items: [{ productId, name, image, quantity, price }],
                total: quantity*price
            });
            return res.status(201).send(newCart);
        }       
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }


})

    



  .put(async (req, res, next) => {
    const userId = req.params.id;
    const { productId, quantity } = req.body;

    try{
        let cart = await Cart.findOne({userId});
        let item = await Coffee.findOne({_id: productId});

        if(!item)
            return res.status(404).send('Item not found!'); // not returning will continue further execution of code.
        
        if(!cart)
          return res.status(400).send("Cart not found");
        else{
            // if cart exists for the user
            let itemIndex = cart.items.findIndex(p => p.productId == productId);

            // Check if product exists or not
            if(itemIndex == -1)
              return res.status(404).send('Item not found in cart!');
            else {
                let productItem = cart.items[itemIndex];
                productItem.quantity = qty;
                cart.items[itemIndex] = productItem;
            }
            cart.bill = cart.items.reduce((sum, item) => sum + item.price * item.quantity,0);
            cart = await cart.save();
            return res.status(201).send(cart);
        }     
    }
    catch (err) {
        // just printing the error wont help us find where is the error. Add some understandable string to it.
        console.log("Error in update cart", err);
        res.status(500).send("Something went wrong");
    }
   
  })
  cartRouter
.route("/:userId/:productId")
//   .delete(async (req, res, next) => 

//     const userId = req.params.userId;
//     const productId = req.params.productId;
//     try{
//         let cart = await Cart.findOne({userId});
       
//         let itemIndex = cart.items.findIndex(p => p.productId == productId);
//         if(itemIndex > -1)
      
//         {
//             let productItem = cart.items[itemIndex];
//             cart.total -= productItem.quantity * productItem.price;
//             cart.items.splice(itemIndex,1);
//         }
//         cart = await cart.save();
//         return res.status(201).send(cart);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).send("Something went wrong");
//     }

.delete( async  (req, res) => {
    try {
      await Cart.deleteOne({ _id: req.params.cartId });
  
      res.status(200).json({
        success: true
      });
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
  });
  

  

module.exports = cartRouter;
