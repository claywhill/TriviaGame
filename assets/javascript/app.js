var timer = 10;


$(document).ready(function() {
    $("#game").hide();
});

$("#start").click(function() {
    $("#start").hide();
    $("#rules").hide();
    $("#game").show();
    setInterval(function() {
        timer--;
        if(timer >= 0) {
            $("#timer").text("Time Remaining: " + timer + " Seconds");
        }
    
        if(timer == 0) {
        
        }
    }, 1000);
    
});
