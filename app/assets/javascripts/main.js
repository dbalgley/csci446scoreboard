var guessesLeft = 10;
var randomNumber = 1  //Math.floor(Math.random() * 101);
var uname = 'FannyFatbottom';

$(function() {
  updateScore(guessesLeft);
  populateHighScores();
  populateRandNumber(randomNumber);
});

function guessChecker() {
	var inputField = document.getElementById("guess");
	var entry = parseFloat( inputField.value );
	guess = entry;
	alert(randomNumber);
	if(guess == randomNumber) {
		alert("You are Win.rar!");
		getName();
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

}

function populateHighScores() {
  	$.get("http://localhost:3000/scores", function(scores) {
  		$('div#highScores').empty();

  		for (var i = 0; i < scores.length; ++i) {
  			$('div#highScores').append("<p>" + scores[i].name + " " + " " + scores[i].score + "</p>");
  		}
  		alert("Number of scores: " + scores.length);
  	}, 'json' );

}

function updateScore(score) {
  $('h2#score span#guessesLeft').text(score);
}

function populateRandNumber(randomNumber) {
	$('h2#randomNumber span#randomNumber').append(randomNumber);
}
function getName(){
	var uname = prompt("Please enter your name", "Darth Vader");
	//highScores.push([guessesLeft, userName]);
	//insertIntoDB(userName, guessesLeft);
	//reset();
	alert("Stuff:" + guessesLeft + uname);
	$.post('http://localhost:3000/scores', {"name":uname, "score":guessesLeft}, 'json');
	populateHighScores(highScores); 
}