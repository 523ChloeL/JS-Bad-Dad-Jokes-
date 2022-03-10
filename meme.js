var myPix = new Array[
	"img\grandpaNose.jpg",
	 "img\innerChild.jpg",
	 "img\minecraftHeart.jpg",
	 "img\scream.png",
	 "img\shotgun.jpg",
	 "img\washingDishes.jpg",
	 "________",
	 "________",
	 "________",
];
function newMeme() {
	var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
