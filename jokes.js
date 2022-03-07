var jokeArray = {
  'What do you call a penguin in the White House?'
  'What do you call a man with no arms or legs, laying in front of your door?'
}
var answerArray = {
  'Lost'
  'Matt'
}
var jokeNumber = 	Math.floor(Math.random() * jokeArray.length);
	document.getElementById('joke').textContent = (jokeArray[randomNumber]).value;
function answer() {
  document.getElementById('answer').textContent = answerArray[jokeNumber];
}
function newJoke() {

}
