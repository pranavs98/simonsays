var started = false;

var buttonColors = ["red", "blue", "yellow", "green"];

var gamePattern = [];

var playerPattern = [];

var roundCount = 1


$(document).keydown(function () {
    if (!started) {
        nextSequence();
        started = true;
    }
});


function nextSequence() {

    playerPattern = [];

    $("h2").text("Round " + roundCount);

    var randomNum = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor);

    $("." + randomChosenColor).animate({
        opacity: 0.4
    }, 100);
    $("." + randomChosenColor).animate({
        opacity: 1
    }, 100);

    playSound(randomChosenColor);

    roundCount++;
}


function checkAnswer(currentLevel) {

    if (playerPattern[currentLevel] === gamePattern[currentLevel]) {
        if (playerPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        $("body").addClass("wrong-answer")
        setTimeout(function () {
            $("body").removeClass("wrong-answer");
        }, 500);
        playSound("wrong");
        $("h2").text("GAME OVER!! Press Any Key To Play Again.");
        startOver();
    }
}


$(".btn").click(function () {

    if (started) {

        var userChosenColor = $(this).attr("id");

        playerPattern.push(userChosenColor);

        playSound(userChosenColor);

        animatePressed(userChosenColor);

        checkAnswer(playerPattern.length - 1);
    }
});


function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePressed(currentColor) {

    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}


function startOver() {
    roundCount = 1;
    gamePattern = [];
    started = false;
}




















// $(document).keydown(function () {
//     $("h2").html("The Game Has Begun");
//     setTimeout(function(){
//         game = true
//         while (game) {

//             var roundCount = 1;

//             $("h2").html("Round " + roundCount);


//             // picks a color
//             var randomChosenColor = buttonColors[nextSequence()];


//             //inserts color in list 
//             gamePattern.push(randomChosenColor);


//             // show the color to user using animation
//             $("." + randomChosenColor).animate({opacity: 0.4}, 100);
//             $("." + randomChosenColor).animate({opacity: 1}, 100);


//             //take user input click and push it into an array 
//             $("button").click(function(event){
//                 console.log(event);
//             })

//             //check with our pattern list


//             //if it is correct increase counter
//             roundCount++;

//             //else show incorrect and ask if to play again(change game to true or false)

//                 game = false;


//             $(".box").click(function (event) {
//                 console.log(event.target.className);
//             });




//             // Game end 


//         }
//     }, 500)

// });



// Game starts 