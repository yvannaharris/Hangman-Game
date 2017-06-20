var availableLetters, words, guess, lettersGuessed, lettersMatched, guessRemain, wins, space;

function setup() {
	availableLetters="abcdefghijklmnopqrstuvwxyz";
	lives: 10;
	words=["puppy", "fetch", "bone", "bath time", "dog chow"];
	space=[];
};

function chooseWord () {
	return words[Math.floor(Math.random() * words.length)];
}

for (var i = 0; i < words.length; i++) {
	space[i]="_";
}

var remainingLetters= words.length; 