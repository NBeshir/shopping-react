const express = require("express");
const Coffee = require("../models/coffee");
const purchaseRouter = express.Router();
//const { items, token } = req.body;
purchaseRouter
  .route("/")

  .post((req, res, next) => {
    Coffee.find()
      .then((coffee) => {
        const itemsData = JSON.parse(coffee);
        const itemsArray = itemsData.coffee;
        let total = 0;

        req.body.map((item) => {
          const itemData = itemsArray.find((i) => {
            return i.id == item.id;
          });
          total = total + itemData.price * item.quantity;
        });

        stripe.customers
          .create({
            email: req.body.stripeTokenId.email,

            source: req.body.stripeTokenId,
          })
          .then((customer) =>
            stripe.charges.create({
              amount: total,
              currency: "usd",
              customer: customer.id,
            })
          )
          .then((charge) => res.render("success"))
          //  console.log("Charge successful");
          // res.json({ message: "Successfuly purchased items" });

          .catch(() => {
            console.log("Charge Fail");
            res.status(500).end();
          });
      })

      .catch((err) => next(err));
  });
// fs.readFile("items.json", function (error, data) {
//     if (error) {
//       res.status(500).end();
//     } else {
//       const itemsData = JSON.parse(data);
//       const itemsArray = itemsData.coffee;
//       let total = 0;

//       req.body.items.map(function(item) {
//         const itemData = itemsArray.find(function(i) {
//           return i.id == item.id;
//         })
//         total = total + itemData.price * item.quantity;
//       });
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
module.exports = purchaseRouter;
