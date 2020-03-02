// variable that holds starting number of seconds
var timer = 5;

// variable that holds number of correct answers
var correct = 0;

// variable that holds number of incorrect answers
var incorrect = 0;

// varialbe that holds number of unanswered questions
var unanswered = 0;

// when document is ready, the ID 'game' and ID 'stats' will hide leaving only the intro and start button
$(document).ready(function() {
    $("#game").hide();
    $("#stats").hide();
});

// when the start button is clicked, ID 'game' appears and everything else will hide. The timer will then begin the countdown.
$("#start").click(function() {
    $("#start").hide();
    $("#rules").hide();
    $("#stats").hide();
    $("#game").show();
    // function that starts the countdown
    setInterval(function() {
        timer--;
        // conditional that checks if the timer is not 0, then keep contiue countdown
        if(timer > 0) {
            $("#timer").text("Time Remaining: " + timer + " Seconds");
        }
        // once timer is 0, the ID 'game' will hide and the ID 'stats' will appear and the 'check' function will run
        else {
            check();
            $("#game").hide();
            $("#stats").show();
            }       
    }, 1000); 
});

// if the button 'Done' is clicked, then the ID 'game' will hide and ID 'stats' will appear and the 'check' function will run
$("#done").click(function() {
    check();
    $("#game").hide();
    $("#stats").show();
});

// $("#restart").click(function() {
//     timer = 0;
//     $("#stats").hide();
//     $("#game").show();
//     setInterval(function() {
//         timer--;
//         if(timer > 0) {
//             $("#timer").text("Time Remaining: " + timer + " Seconds");
//         }
        
//         else {
//             $("#game").hide();
//             $("#stats").show();
//             }       
//     }, 1000);
// });

// function that checks if the value of a question is true, then increase 'correct'
// if the value of a question is empty, then increase 'unanswered'
// if either of those are not the case, then increase 'incorrect'
function check() {

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var question9 = document.quiz.question9.value;
var question10 = document.quiz.question10.value; 

if (question1 == "Yellow Stone") {
    correct++;
} else if (question1 == "") {
    unanswered++;
} else {
    incorrect++;
}


if (question2 == "California") {
    correct++;
} else if (question2 == "") {
    unanswered++;
} else {
    incorrect++;
}


if (question3 == "Smoky Mountains") {
    correct++;
} else if (question3 == "") {
    unanswered++;
} else {
    incorrect++;
}


if (question4 == "Yosemite") {
    correct++;
} else if (question4 == "") {
    unanswered++;
} else {
    incorrect++;
}


if (question5 == "62") {
    correct++;
} else if (question5 == "") {
    unanswered++;
} else {
    incorrect++;
}


if (question6 == "Elias") {
    correct++;
} else if (question6 == "") {
    unanswered++;
} else {
    incorrect++;
}


if (question7 == "Glacier") {
    correct++;
} else if (question7 == "") {
    unanswered++;
} else {
    incorrect++;
}


if (question8 == "Teddy") {
    correct++;
} else if (question8 == "") {
    unanswered++;
} else {
    incorrect++;
}


if (question9 == "1916") {
    correct++;
} else if (question9 == "") {
    unanswered++;
} else {
    incorrect++;
}


if (question10 == "None") {
    correct++;
} else if (question10 == "") {
    unanswered++;
} else {
    incorrect++;
}

// prints the updated stats to the HTML
$("#correct").text("Correct Answers: " + correct);
$("#incorrect").text("Incorrect Answers: " + incorrect);
$("#unanswered").text("Unanswered: " + unanswered);
}