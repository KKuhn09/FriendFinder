var express = require("express");

var app = express();

var PORT = process.env.PORT || 3006;

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/index.html"));
});

app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});