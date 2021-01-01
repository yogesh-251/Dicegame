var randomNumer1 = Math.floor(Math.random()*6) + 1;
var randomNumer2 = Math.floor(Math.random()*6) + 1;

var diceImage1 = "dice" + randomNumer1 + ".png"
var diceImage2 = "dice" + randomNumer2 + ".png"

var randomDice1 = "images/" + diceImage1;
var randomDice2 = "images/" + diceImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDice1);
image2.setAttribute("src", randomDice2);

if(randomDice1>randomDice2){
  document.querySelector("h1").innerHTML = "🚩 Player1 Wins";
}
else if(randomDice1<randomDice2){
  document.querySelector("h1").innerHTML = "Player2 Wins 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
