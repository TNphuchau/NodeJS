const path = require("path");
const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");

//Path file static
app.use(express.static(path.join(__dirname, "public")));

//XML http request, fetch, axios, ajax
// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(express.json);

//HTTP Logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/resources/views"));

//route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
