var guessesLeft = 10;
var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);
var randomNumber = Math.floor(Math.random() * 101);


$(function() {
  updateScore(guessesLeft);
  populateHighScores(highScores);
  populateRandNumber(randomNumber);
});

function guessChecker() {
	var inputField = document.getElementById("guess");
	var entry = parseFloat( inputField.value );
	guess = entry;
	if(guess == randomNumber) {
		alert("You are Win.rar!");
		bigFatWinner(guessesLeft);
		document.getElementById( "guess" ).value="";
		return;
	}
	if(guess < randomNumber) {
		alert("Your guess is too low!");
		guessesLeft=guessesLeft-1;
		updateScore(guessesLeft);
		bigFatLoser(guessesLeft);
		document.getElementById( "guess" ).value="";
		return;
	}
	if(guess > randomNumber) {
		alert("Your guess is too high!");
		guessesLeft=guessesLeft-1;
		updateScore(guessesLeft);
		bigFatLoser(guessesLeft);
		document.getElementById( "guess" ).value="";
		return;
	}
}

function bigFatLoser(guessesLeft)
{
	if(guessesLeft == 0)
	{
		alert("loser");
	}
}

function bigFatWinner(guessesLeft)
{
	alert(guessesLeft);
	highScores.push([guessesLeft, "name"]);
	populateHighScores(highScores);
}

function populateHighScores(scores) {
	$('div#highScores').empty();
  for (var i = 0; i < scores.length; ++i) {
    $('div#highScores').append("<p>" + scores[i][0] + " " + scores[i][1] + "</p>");
  }
}

function updateScore(score) {
  $('h2#score span#guessesLeft').text(score);
}

function populateRandNumber(randomNumber) {
	$('h2#randomNumber span#randomNumber').append(randomNumber);
}