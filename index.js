var buttonColours = ["red", "blue", "green", "yellow"];
var co=0;
var gamePattern = [];
var userPattern = [];
function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
function game_start(){
    
    nextSequence();
}
function game_over(){
    userPattern.length=0;
    gamePattern.length=0;
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    $("h1").text("Game Over😔");
    setTimeout(function(){
        $("body").removeClass("game-over");
        $("h1").text("Press A Key to Start");
    },4000);
}
$(document).keypress(function(){
    if(gamePattern.length===0)
    {
        game_start();
    }
    else{
        game_over();
    }
});

$(".btn").click(function(){
    var cl=this.id;
    console.log(cl);
    $("#" + this.id).fadeIn(100).fadeOut(100).fadeIn(100);
    userPattern.push(this.id);
    if(userPattern[co]!=gamePattern[co])
    {
        co=0;
        game_over();
    }
    else
    {
        co++;
        var audio = new Audio("sounds/" + this.id + ".mp3");
        audio.play();
        if(userPattern.length==gamePattern.length)
        {
            co=0;
            setTimeout(game_start,1000);
            userPattern.length=0;
        }
    }
});