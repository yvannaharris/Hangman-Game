var availableLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

var words = [
	"PUPPY",
	"FETCH",
	"BONE",
	"BATH TIME",
	"DOG CHOW",
];

var wins = 0

var word = words[Math.floor(Math.random() * words.length)];

var guess ;

var guesses = [ ];

var lives ;
var counter ;

var space;



var answerArray = document.getElementById("current-word");
correct = document.createElement('ul');

for (var i = 0; i < word.length; i++) {
	correct.setAttribute('id', 'my-word');
	guess = document.createElement('li');
	guess.setAttribute('class', 'guess');
	
	if (word[i] === "-") {
		guess.innerHTML = "-";
		space = 1;
	} else {
		guess.innerHTML = "_";
	} 

	guesses.push(guess);
	answerArray.appendChild(correct);
	correct.appendChild(guess);

}
console.log("After loop...");

var remainguess = document.getElementById("remaining-guesses");
remainguess.innerHTML =lives;
if (lives < 1) {
	alert("Back to the Dog House...");
	answerArray.reset();
	remainguess.reset();
}
for (var i = 0; i < guess.length; i++) {
	if (counter + space === guesses.length) {
		alert("Belly Rubs for You!");
	}
}
console.log("After second loop");

document.onkeyup =function(event) {
	var guess = String.fromCharCode(event.keyCode).toUpperCase();
	console.log(guess);
	for (var i = 0; i < word.length; i++) {
		if (word[i] === guess) {
			guesses[i].innerHTML = guess;
			counter += 1
		}
	}
	var j = (word.indexOf(guess));
	if (j === -1) {
		lives -= 1;
	}
}
 console.log("Third loop...");





// Get a guess 
//Action/logic that you want to execute when a user presses on a key. 
//document.onkeyup = function(event) {
//		var guess = event.key;
	
//	if (availableLetters.indexOf(guess) > -1) {
		//if ((lettersMatched && lettersMatched.indexOf(guess) > -1) 
		//	|| (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {

//		}
	//}



// Update the array
	//for (var j = 0; j < word.length; j++) {
		//if (word[j] === guess) {
			//answerArray[j] = guess;
			//remainingLetters--;
		//}
	//}
	




//Record wins 
//var wins = 0;

//if (remainingLetters == 0) {
//	wins++;
//}

//var score = wins

//document.querySelector("#win-record").innerHTML = score;


		//for (var j = 0; j < word.length; j++) {
		
		//if(word[j] === guess) {
			//space[i] = guess;
			//remainingLetters--;
			//}
		//}
