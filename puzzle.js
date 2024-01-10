var image1 = document.getElementById(1);
var image2 = document.getElementById(2);
var image3 = document.getElementById(3);
var image4 = document.getElementById(4);
var image5 = document.getElementById(5);
var image6 = document.getElementById(6);
var image7 = document.getElementById(7);
var image8 = document.getElementById(8);
var image9 = document.getElementById(9);
var image10 = document.getElementById(10);
var image11 = document.getElementById(11);
var image12 = document.getElementById(12);
var image13 = document.getElementById(13);
var image14 = document.getElementById(14);
var image15 = document.getElementById(15);
var image16 = document.getElementById(16);
const shuffleButton = document.querySelector("#starting");
shuffleButton.addEventListener("click", shuffle);
function shuffle(){
    var numsAvailable = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var imgsScramble = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
for (let i = 0; i < 16; i++) {
    var randIndx = Math.floor(Math.random() * numsAvailable.length);
    imgsScramble[i] = numsAvailable[randIndx];
    numsAvailable.splice(randIndx, 1);
}
image1.src = "imgs/9.jpg"
console.log("test pnt2"); //TEST
for (let i=1; i<=16; i++){
    var currPiece = document.getElementById(i);
    if(imgsScramble[i-1]==1){
        currPiece.src = "imgs/1.jpg"
    }
    if(imgsScramble[i-1]==2){
        currPiece.src = "imgs/2.jpg"
    }
    if(imgsScramble[i-1]==3){
        currPiece.src = "imgs/3.jpg"
    }
    if(imgsScramble[i-1]==4){
        currPiece.src = "imgs/4.jpg"
    }
    if(imgsScramble[i-1]==5){
        currPiece.src = "imgs/5.jpg"
    }
    if(imgsScramble[i-1]==6){
        currPiece.src = "imgs/6.jpg"
    }
    if(imgsScramble[i-1]==7){
        currPiece.src = "imgs/7.jpg"
    }
    if(imgsScramble[i-1]==8){
        currPiece.src = "imgs/8.jpg"
    }
    if(imgsScramble[i-1]==9){
        currPiece.src = "imgs/9.jpg"
    }
    if(imgsScramble[i-1]==10){
        currPiece.src = "imgs/10.jpg"
    }
    if(imgsScramble[i-1]==11){
        currPiece.src = "imgs/11.jpg"
    }
    if(imgsScramble[i-1]==12){
        currPiece.src = "imgs/12.jpg"
    }
    if(imgsScramble[i-1]==13){
        currPiece.src = "imgs/13.jpg"
    }
    if(imgsScramble[i-1]==14){
        currPiece.src = "imgs/14.jpg"
    }
    if(imgsScramble[i-1]==15){
        currPiece.src = "imgs/15.jpg"
    }
    if(imgsScramble[i-1]==16){
        currPiece.src = "imgs/16.jpg"
    }
}
function selectpiece(){

}
function startGame(){
console.log("check");
    
}
}