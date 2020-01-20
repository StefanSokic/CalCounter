# HaikuBot
Built with a teammate at Hack NYU. We think that framing the world around in the form of the three-lined haiku offers a glorious new perspective on our surroundings as well as provoking meaningful and stimulating lines of thought.  

## What it does  
Running as a Facebook Messenger bot, the user can send a picture file (one which has either been saved on the user's phone or taken in the moment) to HaikuBot and receive in return three lines of wisdom and beauty.  

## How I built it  
We used the Clarifai Computer Vision API to generate a list of keywords pertaining to the user's image, then fed those keywords into a randomly selected Haiku-generating algorithm which we programmed from scratch. The result is then fed back to the Facebook bot and outputted to the user via Facebook messenger. The whole thing was hosted on Heroku and built with Node.js.  

![cells](http://i.imgur.com/URA4DUy.jpg)
