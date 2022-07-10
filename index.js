var randomnumber1= Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice"+randomnumber1+".png";  //dice1.png ti dice6.png

var randomImageSource1 ="images/"+ randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);


var randomnumber2 = Math.floor(Math.random()*6) + 1;

var randomImageSource2 ="images/dice"+ randomnumber2+".png";

var image2 = document.querySelectorAll("img")[1];

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2)



