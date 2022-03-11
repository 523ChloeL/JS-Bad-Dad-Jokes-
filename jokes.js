var jokeArray = [
  'What do you call a penguin in the White House?',
  'What do you call a man with no arms or legs, laying in front of your door?',
  'My Life.',
  'Do not use "beef stew" as a computer password',
  'What is the biggest lie in the entire universe?',
  'A Web Designer decided to use right aligned text',
  'His boss yelled at him for it, because it was not justified',
]
var answerArray = [
  'Lost',
  'Matt',
  'No really, that is the joke',
  'It is not stroganoff',
  'I have read and agree to the Terms & Conditions',
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
