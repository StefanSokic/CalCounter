var array = [["dog", 1], ["denim jeans", 3], ["minimal wart", 4], ["slippery pupper", 4], ["pseudo-hug", 2], ["purple squid", 3], ["saddest shrimp", 3], ["apple", 2], ["squad", 1], ["granola", 3], ["pumpkin pie", 3], ["pineapple", 3], ["community", 4], ["magic", 2], ["noodles", 2], ["morgage", 2], ["dad", 2], ["fishies", 2], ["eel", 1]];

var adjectives = [["abandoned", 3], ["advanced", 2], ["blank", 1], ["blue", 1], ["devillishly", 4], ["cloudy", 2], ["sad", 1], ["meatier", 3], ["cooler", 2], ["interesting", 3], ["identical", 4], ["ill", 1], ["right", 1], ["wrong", 1], ["fun", 1]];

var adverbs = [["Financially", 4], ["Willfully", 4], ["Firmly", 2], ["immensely", 3], ["truthfully", 3], ["Quickly", 2], ["Wearily", 3], ["best", 1]];

var verbs = [["has", 1], ["is", 1], ["celebrating", 4], ["congratulates", 4], ["minimizes", 4], ["sandwiches", 3], ["vocalize", 3], ["murdering", 3], ["was", 1], ["had", 1], ["got", 1], ["made", 1], ["said", 1], ["took", 1], ["jumping", 2], ["crying", 2], ["hugging", 2]];

var nouns = [["dog", 1], ["denim jeans", 3], ["minimal wart", 4], ["slippery pupper", 4], ["pseudo-hug", 2], ["purple squid", 3], ["saddest shrimp", 3], ["apple", 2], ["squad", 1], ["granola", 3], ["pumpkin pie", 3], ["pineapple", 3], ["community", 4], ["magic", 2], ["noodles", 2], ["morgage", 2], ["dad", 2], ["fishies", 2], ["eel", 1]];

var prepositions = [["the", 1], ["a", 1], ["that", 1], ["this", 1], ["his", 1], ["her", 1]];

var questions = [["Who", 1], ["What", 1], ["When", 1], ["Where", 1], ["Why", 1]];

var pronouns = [["I", 1], ["You", 1], ["He", 1], ["She", 1], ["It", 1], ["They", 1]];

function Haiku() {
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

		//start of first line
		syllablesRemainingLine1 = 5;
		
		noun1 = array[0];
		syllablesRemainingLine1 = syllablesRemainingLine1 - noun1[1];

		while(true){
			var placeholder = verbs[Math.floor(Math.random() * verbs.length)];
			if (placeholder[1] == (syllablesRemainingLine1 - 3)) {
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

		


		//return "" + noun1[0] + " " + verb1[0] + " " + adverb1[0] + "\n" + "and " + noun2[0] + " is " + adjective1[0] 


	// // generate the first line, syll count of 5
	// var syllablesRemainingLine1 = 5;
	// noun1 = array[0];
	// // decrement the syllable counter
	// syllablesRemainingLine1 = syllablesRemainingLine1 - noun1[1];
	
	// while(true){
	// 	var placeholder = adjectives[Math.floor(Math.random() * adjectives.length)];
	// 	if (placeholder[1] == syllablesRemainingLine1) {
	// 		adjective1 = placeholder;
	// 		break;
	// 	}
	// }
	// console.log(adjective1[0], noun1[0]);

	// //generage the second line, syll count of 7
	// syllablesRemainingLine2 = 7;

	// noun2 = array[1];
	// syllablesRemainingLine2 = syllablesRemainingLine2 - noun2[1];

	// preposition2 = prepositions[Math.floor(Math.random() * prepositions.length)];
	// syllablesRemainingLine2 = syllablesRemainingLine2 - preposition2[1];
	
	// while(true){
	// 	var placeholder = adjectives[Math.floor(Math.random() * adjectives.length)];
	// 	if ((placeholder[1] <= (syllablesRemainingLine2 - 2)) && (placeholder != adjective1) ) {
	// 		adjective2 = placeholder;
	// 		break;
	// 	}
	// }
	// syllablesRemainingLine2 = syllablesRemainingLine2 - adjective2[1];

	// while(true){
	// 	var placeholder = verbs[Math.floor(Math.random() * verbs.length)];
	// 	if (placeholder[1] == syllablesRemainingLine2) {
	// 		verb2 = placeholder;
	// 		break;
	// 	}
	// }
	// console.log(preposition2[0], adjective2[0], noun2[0], verb2[0]);

	// //generate the thrid line, syll count of 5
	// syllablesRemainingLine3 = 5;
	// adverb3 = adverbs[Math.floor(Math.random() * adverbs.length)];
	// syllablesRemainingLine3 = syllablesRemainingLine3 - adverb3[1];

	// while(true){
	// 	var placeholder = verbs[Math.floor(Math.random() * verbs.length)];
	// 	if (placeholder[1] == syllablesRemainingLine3) {
	// 		verb3 = placeholder;
	// 		break;
	// 	}
	// }
	// console.log(verb3[0], adverb3[0]);


}

Haiku();
