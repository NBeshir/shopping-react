const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  //cart owner's id
  userId:{
    type:String,
    ref:'user'
  },
  items:[{
    productId: {
      type: String,
      ref:"coffee"
    },
   name: {
      type: String,
    
    
    },
   price: {
      type: Number,
     
    },
  image: {
      type: String,
     
     
    },
    quantity: {
      type: Number,
     
      min: [1, 'Quantity can not be less then 1.'],
      default: 1
    },
   
   
   countInStock: {
      type: Number,
     
    }

  }],
 total: {
    type: Number,
    required: true,
    default: 0
}
 
});

module.exports = mongoose.model("Cart", cartSchema);