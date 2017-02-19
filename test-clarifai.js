//Require the client
var Clarifai = require('clarifai');

// instantiate a new Clarifai app passing in your clientId and clientSecret
var app = new Clarifai.App(
	'4-xM5EbfrWiqnMl6GBd7GYAj7dsT1q56sc-y_qu_',
	'_mwAiy80BDc5vlifDVArYwMKEcOlcvT1aCOe9zqH'
	);
// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'https://d1qb2nb5cznatu.cloudfront.net/users/2093095-large?1482598409').then(
  function(response) {
    console.log(response.outputs[0].data.concepts[0].name); //.outputs[0].data
  },
  function(err) {
    console.error(err);
  }
);
