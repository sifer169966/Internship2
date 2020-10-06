const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors"); //cors use for cross domain fetching
const logger = require("morgan");
const methodOverride = require("method-override");
let app = express();
require("dotenv/config");

/*===================================================================================== */
/*                                  MIDDLEWARES                                         */
/*===================================================================================== */
<<<<<<< HEAD
app.use(cors())
app.use(logger('dev'))
app.use(methodOverride('_method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyparser.json())
=======
app.use(cors()); //fetch cross domain
app.use(logger("dev"));
app.use(methodOverride("_method"));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(bodyparser.json());
>>>>>>> 1e7fce488077a750d6767fcc8ed99df4c1f2097d
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

/*===================================================================================== */
/*                                  CONNECT TO DATABASE                                 */
/*===================================================================================== */

mongoose.connect(
  process.env.DB_CONNECTIONTUTORIAL,
  { useNewUrlParser: true },
  () => {
    console.log("Connect to DB Tutorial");
  }
);

/*===================================================================================== */
/*                                  CONTROLLER ROUTES                                   */
/*===================================================================================== */

const firstpage = require("./routes/firstpage");
app.use("/", firstpage);

const StoreRoute = require("./routes/store");
app.use("/store", StoreRoute);

<<<<<<< HEAD
app.listen(3000)
=======
app.listen(4000);
>>>>>>> 1e7fce488077a750d6767fcc8ed99df4c1f2097d
