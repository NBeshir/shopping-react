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
const cors = require('cors');
app.use(express.json());
app.use(cors());
const stripe = require("stripe")("stripeSecretKey");
app.set("view engine", "ejs");
const shopRouter = require("./routes/shop");
const SignupRouter = require("./routes/SignupRoute");
const SigninRouter = require("./routes/SigninRoute")
const purchaseRouter = require("./routes/purchase");
const orderRouter = require("./routes/orderRoute");
const cartRouter = require("./routes/cartRoute");
const userRouter = require("./routes/userRouter");
const port = process.env.PORT || 5000;
app.use(express.static("public/")); //stating that all our files are static and in public folder
//app.use("/css", express.static(__dirname + "public/css"));
//app.use("/js", express.static(__dirname + "public/js"));
//app.use("/img", express.static(__dirname + "public/img"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));
//app.use( express.static( "/node_modules/bootstrap/dist/css/bootstrap.min.css"));
//app.use( express.static( "/node_modules/bootstrap/dist/js/bootstrap.min.js"));


// const corsOptions ={
//   origin:  'http://localhost:5000',
// }


app.use("/signin", SigninRouter);
app.use("/shop", shopRouter);
app.use("/cart", cartRouter);

app.use("/register", SignupRouter);
app.use("/purchase", purchaseRouter);
app.use("/orders", orderRouter);

const connectDB = require("./config/db");
const signinRouter = require("./routes/SigninRoute");
connectDB();


if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
