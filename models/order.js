const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const OrderSchema = new Schema({
  userId: {
    type: String,
},
       
     items:[{

      productId: {
        type: String,
    },
    name: String,
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    },
    price: Number
}],
total: {
  type: Number,
  required: true
},
date_added: {
  type: Date,
  default: Date.now
}
        
      },
      {
        timestamps: true,
      }
);

module.exports = mongoose.model("Order", OrderSchema);