var syllable = require('syllable');

var arr = ["laptop", "no person", "coffee", "woman", "chair", "water", "time"];
var newArr = []

for(var i = 0; newArr.length < 3; i++) {
	if (arr[i] != "no person") {
		newArr.push([arr[i], syllable(arr[i])]);
	}
}
console.log(arr[Math.floor(Math.random() * arr.length)]);
console.log(newArr);