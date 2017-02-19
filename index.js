var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var syllable = require('syllable');
var app = express();

var spawn = require('child_process').spawn,
 py    = spawn('python', ['main.py']);

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
	res.send('Hello world, I am a chat bot')
})

// for Facebook verification
app.get('/webhook/', function (req, res) {
	if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
    	res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})

// Spin up the server
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})

//Adding an API endpoint
app.post('/webhook/', function (req, res) {
	messaging_events = req.body.entry[0].messaging
	for (i = 0; i < messaging_events.length; i++) {
		event = req.body.entry[0].messaging[i]
		sender = event.sender.id
		//Checking for attachments
   		if (event.message.attachments) {
    		//Checking if there are any image attachments 
    		if(event.message.attachments[0].type === "image"){
     			var imageURL = event.message.attachments[0].payload.url;
     			analyzePicture(sender, imageURL);
    		}
   		}
   		//used for outputting text right now
		else if (event.message && event.message.text) {
			text = event.message.text
			sendTextMessage(sender, text + " I have poems for you") //text.substring(0, 200))
		}
	}
	res.sendStatus(200)
})

var token = "EAAH4wv1b3eIBAKQzcA9ZAafSz6UJBi5FdNnMPPsKPBmEVSH9ijU9tXZAPc6aqsHrXRsmZBoZAbuc7jIkPnVkL93AseFSqj0SfE6edxzEhhvNHtemJaduleqPkXtLg7iJ5O0v5dAOBTE0QmfQNDt93KkWzMUpDKZAr19ZAx6r3XdgZDZD"

//Adding function to echo back messages
function sendTextMessage(sender, text) {
	messageData = {
		text: text
	}
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token:token},
		method: 'POST',
		json: {
			recipient: {id:sender},
			message: messageData,
		}}, 
		function(error, response, body) {
			if (error) {
				console.log('Error sending messages: ', error)
			} else if (response.body.error) {
				console.log('Error: ', response.body.error)
			}
	})
}

function analyzePicture(sender, url) {
	//Require the client
	var Clarifai = require('clarifai');

	var app = new Clarifai.App(
		'4-xM5EbfrWiqnMl6GBd7GYAj7dsT1q56sc-y_qu_',
		'_mwAiy80BDc5vlifDVArYwMKEcOlcvT1aCOe9zqH'
		);
	// predict the contents of an image by passing in a url
	app.models.predict(Clarifai.GENERAL_MODEL, url).then(
  	function(response) {
  		var wordArray =[];
  		for (var i = 0; wordArray.length < 3; i++) {
  			if ((response.outputs[0].data.concepts[i].name != "no person") || (syllable(response.outputs[0].data.concepts[i].name) >= 5)){
  				wordArray.push([response.outputs[0].data.concepts[i].name, syllable(response.outputs[0].data.concepts[i].name)]);
  			}
  		}
  		sendTextMessage(sender, generateHaiku(sender, wordArray));

  	},
  	function(err) {
    	console.error(err);
  	}
	);
}

function generateHaiku(sender, array) {
	// array is a 2d array. Each inner array conatins the world followed by the amount of syllables

	// generate all word arrays------------------
	adjectives = create2dArray(adjectivesList = ["abandoned", "advanced", "fried", "blank", "blue", "devillishly", "cloudy", "sad", "meatiest", "cooler", "interesting", "identical", "ill", "right", "wrong", "fun", "conservative", "mushiest", "chunkier", "funkiest", "silly", "slobbery", "naughty", "glorious", "deficient", "incompetent", "benevolent", "wise", "damp", "mini", "dense", "early", "groggy","hip", "radical", "vestigal"]);
	adverbs = create2dArray(adverbsList =["financially", "willfuly", "firmly", "immensely", "truthfully", "quickly", "rarely", "best", "honestly", "swiftly", "majestically", "tenderly", "therefore", "eventually", "instead", "obviously", "daily", "nowhere"]);
	pronouns = create2dArray(pronounsList = ["I", "you", "it", "they", "he", "she"]);
	verbs = create2dArray(verbsList = ["as", "is", "celebrating", "congratulates", "minimizes", "vocalize", "murdering", "caressing", "was", "has", "got", "made", "said", "took", "jumping", "crying", "hugging", "screaming", "consoling", "traumatizing", "concentrates", "highlights", "enunciates", "muttering", "cuddling", "whispers", "cry", "dug", "munches", "boogieing", "mingles", "boasts", "perishes"]);
	questions = create2dArray(questionWordsList = ["who", "what", "when", "where", "why"]);
	prepositions = create2dArray(prepositionsList = ["the", "a", "that", "this", "is", "her", "an", "his"]);

	function create2dArray(list) {
		newArray = [];
		for (var i = 0; i < list.length; i++) {
			newArray.push([list[i], syllable(list[i])]);
		}
		return newArray;
	}
	//---------------------------------------------
// initiate all of the variables
	var noun1 = "";
	var adjective1 = "";
	var noun2 = "";
	var preposition2 = "";
	var adjective2 = "";
	var verb2 = "";
	var adverb3 = "";
	var noun3 = "";
	var adverb1 = "";
	var question1 = "";
	var adjective3 = "";
	var verb3 = "";

	if (Math.floor(Math.random()*(1-0+1)+0)) {
		return haiku1(sender, array);
	} else {
		return haiku2(sender, array);
	}

	function haiku1(sender, array) { 
		console.log("haiku 1 bad");
		// generate the first line, syll count of 5
		var syllablesRemainingLine1 = 5;
		noun1 = array[0];
		// decrement the syllable counter
		syllablesRemainingLine1 = syllablesRemainingLine1 - noun1[1];
		
		while(true){
			var placeholder = adjectives[Math.floor(Math.random() * adjectives.length)];
			if (placeholder[1] == syllablesRemainingLine1) {
				adjective1 = placeholder;
				break;
			}
		}
		console.log(adjective1[0], noun1[0]);

		//generage the second line, syll count of 7
		syllablesRemainingLine2 = 7;

		noun2 = array[1];
		syllablesRemainingLine2 = syllablesRemainingLine2 - noun2[1];

		preposition2 = prepositions[Math.floor(Math.random() * prepositions.length)];
		syllablesRemainingLine2 = syllablesRemainingLine2 - preposition2[1];
		
		while(true){
			var placeholder = adjectives[Math.floor(Math.random() * adjectives.length)];
			if ((placeholder[1] <= (syllablesRemainingLine2 - 2)) && (placeholder != adjective1) ) {
				adjective2 = placeholder;
				break;
			}
		}
		syllablesRemainingLine2 = syllablesRemainingLine2 - adjective2[1];

		while(true){
			var placeholder = verbs[Math.floor(Math.random() * verbs.length)];
			if (placeholder[1] == syllablesRemainingLine2) {
				verb2 = placeholder;
				break;
			}
		}
		console.log(preposition2[0], adjective2[0], noun2[0], verb2[0]);

		//generate the thrid line, syll count of 5
		syllablesRemainingLine3 = 5;
		//adverb3 = adverbs[Math.floor(Math.random() * adverbs.length)];
		//syllablesRemainingLine3 = syllablesRemainingLine3 - adverb3[1];
		noun3 = array[2];
		syllablesRemainingLine3 = syllablesRemainingLine3 - noun3[1];


		while(true){
			var placeholder = verbs[Math.floor(Math.random() * verbs.length)];
			if (placeholder[1] == syllablesRemainingLine3) {
				verb3 = placeholder;
				break;
			}
		}
		console.log(noun3[0], verb3[0]);

		return "" + adjective1[0] + " " + noun1[0] + "\n" + preposition2[0] + " " + adjective2[0] + " " + noun2[0] + " " + verb2[0] + "\n" + noun3[0] + " " + verb3[0];
	}
	function haiku2(sender, array) {
		console.log("haiku 2 bad");
		//start of first line
		syllablesRemainingLine1 = 5;
		
		noun1 = array[0];
		syllablesRemainingLine1 = syllablesRemainingLine1 - noun1[1];

		while(true){
			var placeholder = verbs[Math.floor(Math.random() * verbs.length)];
			if (placeholder[1] <= (syllablesRemainingLine1 - 3)) {
				verb1 = placeholder;
				break;
			}
		} 
		syllablesRemainingLine1 = syllablesRemainingLine1 - verb1[1];

		while(true){
			var placeholder = adverbs[Math.floor(Math.random() * adverbs.length)];
			if (placeholder[1] == (syllablesRemainingLine1)) {
				adverb1 = placeholder;
				break;
			}
		} 		

		console.log(noun1[0], verb1[0], adverb1[0]);

		// start on second line
		syllablesRemainingLine2 = 5;

		noun2 = array[1];
		syllablesRemainingLine2 = syllablesRemainingLine2 - noun2[1];

		while(true){
			var placeholder = adjectives[Math.floor(Math.random() * adjectives.length)];
			if (placeholder[1] == (syllablesRemainingLine2)) {
				adjective1 = placeholder;
				break;
			}
		}

		console.log("and ", noun2[0], " is ", adjective1[0]);

		//start line 3
		syllablesRemainingLine3 = 3;

		while(true){
			var placeholder = adjectives[Math.floor(Math.random() * adjectives.length)];
			if (placeholder[1] == (syllablesRemainingLine3)) {
				adjective2 = placeholder;
				break;
			}
		}	
		console.log("who is ", adjective2[0], "?")	

		return "" + noun1[0] + " " + verb1[0] + " " + adverb1[0] + "\n" + "and " + noun2[0] + " is " + adjective1[0] + "\n" + "who is " + adjective2[0] + "?"; 


	}
}

