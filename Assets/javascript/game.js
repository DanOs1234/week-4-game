var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function() {

    $(".crystals").empty();

    var images = ['Assets/images/BlueCrystal.jpg',
    'Assets/images/GreenCrystal.jpg',
    'Assets/images/PurpleCrystal.jpg',
    'Assets/images/WhiteCrystal.jpg'];

randomResult = Math.floor(Math.random() * 101) + 19;

$("#result").html("Match This Score: " + randomResult);

for(var i=0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;
    
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });
    crystal.css({
        "background-image": "url('" + images[i] + "')",
    })

    $(".crystals").append(crystal);
    }
    $("#previous").html("Your Score: " + previous);
}

resetAndStart();

$(document).on('click', ".crystal", function() {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Your Score: " + previous);

    if(previous > randomResult) {
        lost++;

        $("#lost").html("Losses: " + lost);
        previous = 0;
        resetAndStart();
    }

    else if (previous === randomResult){
        win++;

        $("#win").html("Wins: " + win);
        previous = 0;
        resetAndStart();
    }
})