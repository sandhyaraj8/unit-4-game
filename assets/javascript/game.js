
//pseudo code://////
// A game with 4 crystals
//Every crystal has a random number between 1-12
//A new random number should be generated to the each srtystals after winning or losing.
//when user clicks on the crystal, it should add to the previous number until it hits the total score
//if its not equal to the toal score, then start over and increment the lose counter
// if its equal to the total score, then increment the win conter.
//https://jsfiddle.net/q17zaxe3/
//create variables 
var randomResult;
var lostCounter = 0;
var winCounter = 0;
var previousNumber = 0;

$('#lost').animate({fontSize: '200%',  color:'red'}).animate({fontSize: '100%'});
$('#win').animate({fontSize: '200%',  color:'red'}).animate({fontSize: '100%'});

function startGame() {
    $(".crystal").empty();
    randomResult = Math.floor(Math.random() * 102) + 19;

    previousNumber = 0;

    $("#result").html("Random Result: " + randomResult);
    $("#previousNumber").html("Total score: " + previousNumber);
    $("#lost").html("Total lost: " + lostCounter);
    $("#win").html("Total Win: " + winCounter);

 
    //create 4 crystals div in the DOM
    for (var i = 0; i < 4; i++) {
        //generate random number for each crystal
        var random = Math.floor(Math.random() * 12) + 1;
        var oneCrystal = $("<div>");
        oneCrystal.attr({
            "class": "square",
            "num": random
        });
        //oneCrystal.text(random); //to see the random number generated in the crystals

        $(".crystal").append(oneCrystal);

        $(oneCrystal).append('<img style="height:200px; width:200px" src="assets/images/crystal_' + (i + 1) + '.jpg">');
    }//end-for

} //end-startgame
startGame();

$(document).on("click", ".square", function () {
    // $(".square").on("click", function () { // event delegation
    var addNum = parseInt($(this).attr("num"));
    previousNumber += addNum;
    $("#previousNumber").html("Total score: " + previousNumber);

    if (previousNumber > randomResult) {
        lostCounter++;
        $('#lost').animate({fontSize: '200%',  color:'red'}).animate({fontSize: '100%'});
        startGame();
        console.log("You lost!")              
    }
    else if (previousNumber === randomResult) {
        winCounter++;
        $('#win').animate({fontSize: '200%',  color:'red'}).animate({fontSize: '100%'});
        startGame();
    }
    console.log(previousNumber);
})