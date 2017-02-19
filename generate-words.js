var syllable = require('syllable');

console.log(create2dArray(adjectives = ["blue", "green", "yellow"])[0]);
console.log(create2dArray(adverbs =[]));
console.log(create2dArray(pronouns = []));
console.log(create2dArray(verbs = []));
console.log(create2dArray(questionWords = []));
console.log(create2dArray(prepositions = []));
console.log(create2dArray(nouns = []));

function create2dArray(list) {
	newArray = [];
	for (var i = 0; i < list.length; i++) {
		newArray.push([list[i], syllable(list[i])])
	}
	return newArray;
}