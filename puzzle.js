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
const reset = document.querySelector("#reset");
function shuffle(){
     var numsAvailable = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    var imgsScramble = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    for (let i = 0; i < 16; i++) {
        var randIndx = Math.floor(Math.random() * numsAvailable.length);
        imgsScramble[i] = numsAvailable[randIndx];
        numsAvailable.splice(randIndx, 1);
    }
}
function selectpiece(){

}
function startGame(){

}