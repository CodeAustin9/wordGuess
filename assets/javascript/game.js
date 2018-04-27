//global variables
var loss//loss--;number of times the user has failed to guess correctly after exhausting all guesses
var wins//number of times the user has guessed the letter correctly; wins++

var numBlanks = 0;//count word length function
var isCorrectLetter = "";//index location blank of letter function
var lettersGuessed = [];//letter guessed will be displayed on page
var guessesLeft = 0;//number of guesses left 
var wrongLetter = [];// if conditional; score--
var wordDisplayed = "";
var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
  "y", "z"]


//defines your words to choose from here
var randWord = function() {
  var wordDisplayed = [ 
    "madonna",
    "prince",
    "aerosmith",
    "poison"
  ];
};

//onkeyup function
document.onkeyup = function (event) {
  lettersGuessed.push(String(event.key).toLowerCase());

};
//determines if the key pressed is a string
function isLetter(str) {
  return wordDisplayed.length === 1 && WordDisplayed.match(/[a-z]/i);
}
//Need help with what function gets called every time and in what order; look up onpage load; check every time to punch a letter; check if letter has been used before
//functions
var hangmanPrompt = function () { //prompt user to enter letter **NEED HELP
  //key capture instead of prompt

  var userGuess = prompt("Guess a lowercase letter, or click cancel to stop play."); //document.onkeyup=function(event)   key.event; call check function
  userGuess = userGuess.toLowerCase();
  if (userGuess === false) {
    alert("Please enter a letter.");
    hangmanPrompt();
  }
  else if (userGuess.length != 1) {
    alert("Please enter only one letter.");
    hangmanPrompt();
  }
  return userGuess
}

var randWord = function () { //math function chose random word.
  wordDisplayed = selectWord[Math.floor(Math.random() * selectWord.length)];
  lettersInWord = wordDisplayed.split("");
  numBlanks = lettersInWord.length;
  hangmanPrompt();



  document.getElementById("numBlanks").innerHTML = blanksAndSucesses.join(" ");
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("winCoutner").innerHTML = winCount;
  document.getElementById("lossCounter").innerHTML = lossCount;

  document.getElementById("numBlanks-text").innerHTML = numBlanks.join(" ");
  for (var i = 0; 1 < numBlanks.lengthS; i++) { //get number of blanks
    isCorrectLetter.push("_");
  }
}
// 

function check(letter) {
  //compare each letter to each letter's position; is the letter in the word;

  if (wordDisplayed.includes(letter)) {
    isCorrectLetter = true;
    alert("You guessed a letter correctly!");
    document.getElementById("isCorrectLetter").innerHTML = isCorrectLetter.join(" "); //DOES THIS NEED TO SAY win++?
    //print letter insert into index position; determine index, put blanks on either side?** NEED HELP
  }
  //convert wrong letter to a string using join **NEED HELP
  else {
    if (wrongLetter.includes(letter)) {
      wrongLetter.push(letter);//guess same key multiple times cancels decrement; doesn't count in the score **NEED HELP
      guessesLeft--
    }
  }
}
if (isCorrectLetter) {
  for (var i = 0; i < numBlanks; i++) {
    if (wordDisplayed[i] == userGuess) {
      blanksAndSucesses[i] = userGuess;
    }
  }
}
else {
  wrongLetters.push(userGuess);
  guessesLeft--
}


document.getElementById("wrongLetters-text").innerHTML = wrongLetter.join("  ");// DOES HTML = LOSS--?

var win = function () {
  if (isCorrectLetter === wordDisplayed) {
    wins++
    alert("You win!");
  }
}
document.getElementById("wins").innerHTML = wins;

var gameStatus = function () {
  if (wrongLetter >= 10) {
    alert("The game is over");
    loss++
    break;
    document.getElementById("loss-text").innerHTML = loss - text;

  } else {
    alert(isCorrectLetter.join(" "));
    alert("Great! The answer was " + wordDisplayed);
    hangmanPrompt();
  }
}
var guessesLeft = selectWord.length;

var guessesLeftCount = function () {
  while (guessesLeft > 1) {
    guessesLeft(selectWord);
    hangmanPrompt();
  }
}
