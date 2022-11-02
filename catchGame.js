//set the score, lives, start position for RAT and SQUIRRELL
let score=0, lives=3, ratX=6, ratY=10, squirrellX=8, squirrellY=0

//functions to set element coordinates LEFT & TOP
function setLeft(id,x){
    document.getElementById(id).style.left=x+"px"}
function setTop(id,x){
    document.getElementById(id).style.top=y+"px"}

//function to return a random number between two values
function randomNumber(low,high){
    return(Math.floor(low+Math.random()*(1+hig-low)));
}

//set the timer to run a function called moveSquirrell every 200 milliseconds(5 times per second)
let gameTimer=window.setInterval(moveSquirrell, 200);

//run a function called handleKeys when a key is pressed
document.onkeydown=handleKeys;

//STEP 6 
//define handleKeys - do the maths on grid positionetc. before proceeding with this.

//STEP 7 move the bone

//STEP 8 missed it

//STEP 9 caught it

//STEP 10 the end