var timer = 10;


$(document).ready(function() {
    $("#game").hide();
    $("#stats").hide();
});

$("#done").click(function() {
    $("#game").hide();
    $("#stats").show();
});

$("#start").click(function() {
    $("#start").hide();
    $("#rules").hide();
    $("#stats").hide();
    $("#game").show();
    setInterval(function() {
        timer--;
        if(timer > 0) {
            $("#timer").text("Time Remaining: " + timer + " Seconds");
        }
        
        else {
            $("#game").hide();
            $("#stats").show();
            }       
    }, 1000);    
});