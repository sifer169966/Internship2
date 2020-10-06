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
app.use(cors());
app.use(logger("dev"));
app.use(methodOverride("_method"));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(bodyparser.json());
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

app.listen(4000);
