var randomNum1 = Math.floor(Math.random()*6 + 1);
var randomNum2 = Math.floor(Math.random()*6 + 1);

var imgSource1 = "images/dice" + randomNum1 + ".png";
var imgSource2 = "images/dice" + randomNum2 + ".png";

document.querySelector(".img1").setAttribute("src" , imgSource1);
document.querySelector(".img2").setAttribute("src" , imgSource2);

var text = document.querySelector("h1");

if(randomNum1 > randomNum2) {
  text.innerHTML = "Player 1 Wins!";
}else if(randomNum1 === randomNum2) {
  text.innerHTML = "Draw!";
}else {
  text.innerHTML = "Player 2 Wins";
}
