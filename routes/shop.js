const express = require("express");
const Coffee = require("../models/coffee");
const shopRouter = express.Router();

shopRouter
  .route("/")

  .get((req, res, next) => {
    Coffee.find()
      .then((coffee) => ({
        items: JSON.parse(coffee),
        stripePublicKey: stripePublicKey,
      }))
      .catch((err) => next(err));
  });
//   .post((req, res, next) => {
//     Coffee.create(req.body)
//       .then((coffee) => {
//         console.log("Coffee variety Created", coffee);
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json");
//         res.json(coffee);
//       })
//       .catch((err) => next(err));
//   })
//   .put((req, res) => {
//     res.statusCode = 403;
//     res.end("PUT operation not supported on /campsites");
//   })
//   .delete((req, res, next) => {
//     Coffee.deleteMany()
//       .then((response) => {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json");
//         res.json(response);
//       })
//       .catch((err) => next(err));
//   });

// shopRouter
//   .route("/:coffeeId")

//   .get((req, res, next) => {
//     Coffee.findById(req.params.coffeeId)
//       .then((coffee) => {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json");
//         res.json(coffee);
//       })

//       .catch((err) => next(err));
//   })
//   .post((req, res) => {
//     res.statusCode = 403;
//     res.end(
//       `POST operation not supported on /campsites/${req.params.coffeeId}`
//     );
//   })
//   .put((req, res, next) => {
//     Coffee.findByIdAndUpdate(
//       req.params.coffeeId,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     ) //new :true to get information back about the update
//       .then((coffee) => {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json");
//         res.json(coffee);
//       })
//       .catch((err) => next(err));
//   })
//   .delete((req, res, next) => {
//     Coffee.findByIdAndDelete(req.params.coffeeId)
//       .then((response) => {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json");
//         res.json(response);
//       })
//       .catch((err) => next(err));
//   });
module.exports = shopRouter;
