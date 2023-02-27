const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const CoffeeSchema = new Schema({

  name: {
    type: String,
    required: true,
  },
  price: {
    type: Currency,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  countInStock: { type: Number,
     
     required: true },
});

module.exports = mongoose.model("Coffee", CoffeeSchema);
