let score1=0
let score2=0

const click =  () => {
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var one = document.querySelector(".img1");
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randimg = "images/" + randomDiceImage;

one.setAttribute("src", randimg); 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
var ig2 = document.querySelector(".img2");
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randimg2= "images/" + randomDiceImage2;

ig2.setAttribute("src",randimg2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Score"+score1+ "Player 2 Score"+score2
    score1++;
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Score"+score1+ "Player 2 Score"+score2
     score2++;
}else{
    document.querySelector("h1").innerHTML="Player 1 Score"+score1+ "Player 2 Score"+score2
}
if(score1===5){
    document.querySelector("h1").innerHTML="Player 1 win"+score1
}
if (score2==5){
    document.querySelector("h1").innerHTML="Player 2 win"+score2
}


}

var btn=document.querySelector("#btn")
btn.addEventListener("click",click)