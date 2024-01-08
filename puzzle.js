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
startGame();{
    properSetUp = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16];
    var numsAvailable = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    var cardsScramble = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    //randomizes card at each start of game
    for (let i = 0; i < 16; i++) {
        var randIndx = Math.floor(Math.random() * numsAvailable.length);
        cardsScramble[i] = numsAvailable[randIndx];
        numsAvailable.splice(randIndx, 1);
    }
}
selectpiece();{

}
checkDone();{

}