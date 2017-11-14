//Include path package to get the correct file path for our html
var path = require("path");

module.exports = function(app){
	//Serve "/../public/survey.html" files when the route is /survey
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});
	//If no matching route is found, default to home
	app.get("*", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};

