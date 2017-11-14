//Requiring express and body-parser
var express = require("express");
var bodyParser = require("body-parser");

//Setting up the express app
var app = express();
var PORT = process.env.PORT || 3000;

//BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Requiring our routes, which tell the server how to respond when a user visits or requests data
//from certain URLs
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//"Starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});