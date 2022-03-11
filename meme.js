var memeArray = [
	"img\grandpaNose.jpg",
	 "img\innerChild.jpg",
	 "img\minecraftHeart.jpg",
	 "img\scream.png",
	 "img\shotgun.jpg",
	 "img\washingDishes.jpg",
	 //"________",
	 //"________",
	 //"________",
];
window.onload = newMeme();

function newMeme() {
	var randomMeme = Math.floor(Math.random() * memeArray.length);
     document.getElementById('meme').style.backgroundImage = memeArray[randomMeme];
}
