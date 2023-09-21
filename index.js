var randomVariable1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "dice" + randomVariable1 + ".png";
var randomDiceImageSource = "./images/" + randomDiceImage;

var dice1 = document.querySelectorAll("img")[0];

dice1.setAttribute("src",randomDiceImageSource);
//dice2
var randomVariable2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImageSource2 = "./images/dice"+ randomVariable2 + ".png";

var dice2 = document.querySelectorAll("img")[1];

dice2.setAttribute("src",randomDiceImageSource2);

if (randomVariable1 > randomVariable2) {
   document.querySelector("h1").innerHTML = "Player1 wins" ;
   
} else if (randomVariable1 < randomVariable2) {
  document.querySelector("h1").innerHTML = "Player2 wins" ;
} else {
   document.querySelector("h1").innerHTML = "Draw" ;
}
