var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);
img1.setAttribute("src","images/dice"+randomNumber1+".png");
const img2=document.querySelector(".img2");
img2.setAttribute("src","images/dice"+randomNumber2+".png");

// check who won
if (randomNumber1>randomNumber2){
    document.querySelector(".result").innerHTML="<p>Player 1 Won</p>";
}
else if (randomNumber2>randomNumber1){
    document.querySelector(".result").innerHTML="<p>Player 2 Won</p>";
}
else{
    document.querySelector(".result").innerHTML="<p>it's a tie</p>";
}
