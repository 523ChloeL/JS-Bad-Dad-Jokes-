var jokeArray = [
  'What do you call a penguin in the White House?',
  'What do you call a man with no arms or legs, laying in front of your door?'
]
var answerArray = [
  'Lost',
  'Matt'
]
let newJoke = 0;

randomJoke();

// function to create a random # and then use that rndm # as the index we select from our joke list
function randomJoke() {
  newJoke = Math.floor(Math.random() * jokeArray.length);
  document.getElementById('joke').textContent = (jokeArray[newJoke]);
  document.getElementById('answer').textContent = ' ';  
}
function answer() {
  document.getElementById('answer').textContent = answerArray[newJoke];

}
