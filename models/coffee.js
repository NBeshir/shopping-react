const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const cofeeSchema = new Schema({
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
  },
});

module.exports = mongoose.model("Coffee", cofeeSchema);
