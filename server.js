var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

//Setting up the express app
var app = express();
var PORT = process.env.PORT || 3006;

app.use(bodyParser.urlencoded({ extended: false }));

//Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function(req, res){
	res.sendFile(path.join(__dirname, "app/data/friends.js"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


