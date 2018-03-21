////////////////////////////////////////////////////
// 2018-03-21 John Palumbo.
//
//this is the driver javascript will contain doc.ready 
//
//will take class Question and class Quiz (quiz controller.js)
////////////////


////////////////////////////
// GLOBAL VARS
///////////////////////////

var isEnded = false;
var interadID;
var setTimeoutID; // if game total is> 30 seconds we stop game 



var questions = [
    new Question("What color, blue, is fav color", ["Green", "Yellow", "Blue", "Red"], "Blue"),
    new Question("What is 5 + 5", ["One", "Ten", "Twenty", "Fifty"], "Ten"),
    new Question("What is your mission", ["To Search for Holy Grail", "To Eat Lunch", "To Rock this Class", "All of Above"], "To Search for Holy Grail"),
    new Question("Which is A", ["A", "B", "C", "D"], "A"),
    new Question("Which is B", ["A", "B", "C", "D"], "B"),
    new Question("Which is C", ["A", "B", "C", "D"], "C"),
    new Question("Which is D", ["A", "B", "C", "D"], "D")
];

var quiz = new Quiz(questions); //Give class Quiz the array will all question , Quiz handles question completley.

function populateHtml() {
    if (quiz.isEnded()) {
        //game over show scores
        showScores();
    } else {
        //show the question
        $('#question').html(quiz.getQuestionIndex().text);
        //show the 4 choices
        var choices = quiz.getQuestionIndex().choices; // returns array of 4 choices
        //getting the 4 buttons in one shot       
        //  iterate add 4 choices array onto button
        $('button').each(function (chcIx) {
            $(this).html(choices[chcIx]);
            chcIx++;
        })


    }

}

function showScores() {
    console.log("show Scores");
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml+= " <h2 id='score'> Your scores: " + quiz.score + "</h2>";

    //grab div id"quiz - replace with this
    $('#id').html(gameOverHtml);
}

///////////////////////////
// FUNCTIONS
/////////////////////////

function initializeGame() {
    isEnded = false;
    console.log("initialize Game");
}




$(document).ready(function () {
    console.log("Doc ready");

    initializeGame();

    //add click event to buttons
    $('button').click(function () {
        var bID = $(this).attr("id");
        console.log("ButtonClicked", bID);
        //quiz.guess()  //38.29
    })

    populateHtml();

});


