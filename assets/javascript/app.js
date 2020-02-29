var timer = 10;

setInterval(function() {
    timer--;
    if(timer >= 0) {
        $("#timer").text("Time Remaining: " + timer + " Seconds");
    }

    if(timer == 0) {
    
    }
}, 1000);
