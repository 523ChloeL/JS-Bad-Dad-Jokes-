var myPix = new Array[
	"img\grandpaNose.jpg",
	 "images/tiger.jpg",
	 "images/bear.jpg"
];
var randomMeme = 	Math.floor(Math.random() * memeArray.length);
	document.getElementById('press-quote').textContent = '“' + quotesArray[randomNumber].split(' — ')[0] + '” — ' + quotesArray[randomNumber].split(' — ')[1];
function newMeme() {
  //change background to toy
  document.getElementById('toy-pic').style.backgroundImage = 'url(' + toys.value + '.jpg)';
  //document.getElementById('toy-desc').style.text = toys.selectedIndex;

  document.getElementById('toy-desc').textContent = descArray[desIndex-1];
}
