if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const stripeSecretkey = process.env.Stripe_Secret_Key;
const stripePublicKey = process.env.Stripe_Public_Key;

const { json } = require("express");
const express = require("express");
const app = express();
const fs = require("fs");
const ejs = require("ejs");
app.use(express.json());
const stripe = require("stripe")("stripeSecretKey");
app.set("view engine", "ejs");
const shopRouter = require("./routes/shop");
const purchaseRouter = require("./routes/purchase");
const port = process.env.PORT || 5000;
app.use(express.static("public/")); //stating that all our files are static and in public folder
//app.use("/css", express.static(__dirname + "public/css"));
//app.use("/js", express.static(__dirname + "public/js"));
//app.use("/img", express.static(__dirname + "public/img"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));
//app.use( express.static( "/node_modules/bootstrap/dist/css/bootstrap.min.css"));
//app.use( express.static( "/node_modules/bootstrap/dist/js/bootstrap.min.js"));
app.use("/shop", shopRouter);
app.use("/purchase", purchaseRouter);
const connectDB = require("./config/db");
connectDB();
// app.get("/shop", function (req, res) {
//   fs.readFile("items.json", function (error, data) {
//     if (error) {
//       res.status(500).end();
//     } else {
//       res.render("shop.ejs", {
//         items: JSON.parse(data),
//         stripePublicKey: stripePublicKey
//       })
//     }
//   })
// })

// app.post("/purchase", function (req, res) {
//   fs.readFile("items.json", function (error, data) {
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
//       stripe.charges
//         .create({
//           amount: total,
//           source: req.body.stripeTokenId,
//           currency: "usd",
//         })
//         .then(function () {
//           console.log("Charge successful");
//           res.json({ message: "Successfuly purchase items" });
//         })
//         .catch(function () {
//           console.log("Charge Fail");
//           res.status(500).end();
//         });
//     }
//   });
// });

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
