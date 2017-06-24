window.onload = function() {

// Variables
var availableLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

var word ;

var guess ;

var guesses = [ ];

var lives ;
var counter ;

var space;

var score= 0;


// Get elements
var remainguess = document.getElementById("remaining-guesses");
var wins = document.getElementById("win-record");

// Guesses ul
result = function () {
	var answerArray = document.getElementById("current-word");
	correct = document.createElement('ul');

		for (var i = 0; i < word.length; i++) {
			correct.setAttribute('id', 'my-word');
			guess = document.createElement('li');
			guess.setAttribute('class', 'guess');
	
			if (word[i] === "-") {
			guess.innerHTML = "-";
			space = 1;
			guesses += guess;
			lives--;
			} else {
			guess.innerHTML = "_";
			} 



			guesses.push(guess);
			answerArray.appendChild(correct);
			correct.appendChild(guess);
	}
}

console.log("After loop...");

// Show remaining guesses
comments = function () {
	remainguess.innerHTML = lives;
	wins.innerHTML = score;
	if (lives < 1) {
		alert("Back to the Dog House...");
		play();
		
	}
	//for (var i = 0; i < guesses.length; i++) {
		if (counter === guesses.length && space === 0) {
			alert("Belly Rubs for You!");
			score++
			play();
		}; 
	//}
}
comments();
	console.log("After second loop");


// OnKeyUp Function
check = function () {
	document.onkeyup =function(event) {
		var guess = String.fromCharCode(event.keyCode).toUpperCase();
	console.log(guess);
	//var lettersGuessed = document.getElementById("letters-guessed");
		lettersGuessed = document.createElement('span');
		lettersGuessed.setAttribute('id', 'letters-guessed');

		for (var i = 0; i < word.length; i++) {
			
			if (word[i] === guess) {
				guesses[i].innerHTML = guess;
				counter += 1;
				document.getElementById("letters-guessed").innerHTML = guess;
			} else {
				document.getElementById("letters-guessed").innerHTML = guess;
			}
		}
		var j = (word.indexOf(guess));
		if (j === -1) {
			lives -= 1;
			comments();
		} else {
			comments();
		}
	}
}
check();

 console.log("Third loop...");

 //Play
 play = function () {
 	var words = [
		"PUPPY",
		"FETCH",
		"BONE",
		"BATH TIME",
		"DOG CHOW",
		"SCOOBY DOO",
		"SNOOPY",
		"DOGGY PADDLE",
		"LEASH",
		"COLLAR",
		"FRISBEE",
		"LICK",
		"PET",
		"BARK",
		"WAG"
	];

	word = words[Math.floor(Math.random() * words.length)];
	console.log(word);

 	guesses = [ ];
 	lives = 10;
 	counter = 0;
 	space = 0;
 	score = 0;
 	result();
 	comments();
 }

 play();






}
