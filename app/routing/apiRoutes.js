//requiring our friends array from friends.js
var friends = require("../data/friends.js");

//routing
module.exports = function(app){

	//API GET requests
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	//API POST requests that will match our user with a friend
	app.post("/api/friends", function(req, res){

		//Object that will hold our "best match"
		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: Infinity
		};
		//Parse the user survery
		var userData = req.body;
		var userScores = userData.scores;
		var totalDifference;

		//For each friend in our API
		for(var i =0; i<friends.length; i++){
			var currentFriend = friends[i];
			totalDifference = 0;
			console.log(currentFriend.name);

			//For each score
			for(var j=0; j<currentFriend.scores.length;j++){
				var currentFriendScore = currentFriend.scores[j];
				var currentUserScore = userScores[j];
				//Calculate difference in scores and sum them into totalDifference
				totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
			}
			//If totalDifference is less than the differences of the best match, replace bestMatch
			if(totalDifference <= bestMatch.friendDifference){
				bestMatch.name = currentFriend.name;
				bestMatch.photo = currentFriend.photo;
				bestMatch.friendDifference = totalDifference;
			}
		}
		//Push user data to the database (API)
		friends.push(userData);
		//Return a JSON with the user's best match.
		res.json(bestMatch);
	});
};