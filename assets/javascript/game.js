$(document).ready(function () {


    var score = 0;
     console.log("UserScore:" + score);
     $("#total-score").html("Total Score: " + score);


     
    var losses = 0;
    console.log("Loses:" + losses);
    $("#losses").html("Losses: " + losses);
    
    var win = 0;
    console.log("Wins:" + win);
    $("#wins").html("Wins: " + win);
    

    ranNum = Math.floor((Math.random() * 102) + 19);
    console.log("Random Number: " + ranNum);
    $("#rand-num").text("Random Number: " + ranNum);

    var gemRed = Math.floor((Math.random() * 11) + 1);
    console.log("GemRed: " + gemRed);
    $(".gemred").html("value=" + gemRed);

    var gemGreen = Math.floor((Math.random() * 11) + 1);
    console.log("GemGreen: " + gemGreen);
    $(".gemgreen").html("value=" + gemGreen);

    var gemBlue = Math.floor((Math.random() * 11) + 1);
    console.log("GemBlue: " + gemBlue);
    $(".gemblue").html("value=" + gemBlue);

    var gemColor = Math.floor((Math.random() * 11) + 1);
    console.log("GemColor: " + gemColor);
    $(".gemcolor").html("value=" + gemColor);

    



    var gameReset = function() {    
        score = 0;
        ranNum = Math.floor((Math.random() * 102) + 19);
        gemRed = Math.floor((Math.random() * 11) + 1);
        gemGreen = Math.floor((Math.random() * 11) + 1);
        gemBlue = Math.floor((Math.random() * 11) + 1);
        gemColor = Math.floor((Math.random() * 11) + 1);
        console.log("New Ran: " , ranNum);
        $("#rand-num").html("Random Number: " + ranNum);
        $("#total-score").html("Total Score: " + score);
        $("#wins").html("Wins: " + win);
        $("#losses").html("Losses: " + losses);
    };

    var gameUpdate = function() {
        if (score == ranNum) {
            win++;
            console.log(win);
            $("#wins").html("Wins: " + win);
            gameReset();

            
            
    
        } else if (score > ranNum) {
            losses++;
            $("#losses").html("Losses: " + losses);
            gameReset();
        }
    };


    $(".gemred").on("click", function(){
        score = score + gemRed;
        console.log(score);
        $("#total-score").html("Total Score: " + score)
        gameUpdate();
    });
     
     $(".gemgreen").on("click", function(){
        score = score + gemGreen;
        console.log(score);
        $("#total-score").html("Total Score: " + score)
        gameUpdate();


    });

    $(".gemblue").on("click", function(){
        score = score + gemBlue;
        console.log(score);
        $("#total-score").html("Total Score: " + score)
        gameUpdate();


    });

    $(".gemcolor").on("click", function(){
        score = score + gemColor;
        console.log(score);
        $("#total-score").html("Total Score: " + score)
        gameUpdate();


    });




    



    







    



});