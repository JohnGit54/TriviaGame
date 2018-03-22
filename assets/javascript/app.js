////////////////////////////////////////////////////
// 2018-03-21 John Palumbo.
////////////////
// A - if questin take longer than 7 second - user fails on that question
// B - game total time should be less than 45 seconds

////////////////////////////
// GLOBAL VARS
///////////////////////////

var isEnded = false;
var interadID;
var setTimeoutID;
var setTimeoutID2;
var setIntervalID;
var setIntervalID2;



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
        //remove bacground colr red-or green from all buttons
        $('button').removeClass('grnback');
        $('button').removeClass('rdback');
        //  iterate add 4 choices array onto button
        $('button').each(function (chcIx) {
            $(this).html(choices[chcIx]);
            chcIx++;
        })
        
        showProgress();
    }

}

function showProgress() {
    //chnage footer text
    var curQuesNum = quiz.questionIndex + 1;
    var footr = $('#progress');
    footr.html("Question " + curQuesNum + " of " + questions.length);    
}

function showScores() {
    console.log("show Scores");
    var gameOverHtml = "<div class='resultspage'><h1>Result</h1>";
    gameOverHtml += " <h2 id='score'> Your score : " + quiz.score + "</h2></div>";

    //grab div id"quiz - replace with this
    $('.grid').html(gameOverHtml);
}

function initializeGame() {
    isEnded = false;
    console.log("initialize Game");
    //need to use timer- one for each question, one for game total time
}


function hiLiteButtons(UserSelectedVals) {
    console.log(UserSelectedVals.isRight, UserSelectedVals.userChoice, UserSelectedVals.correctAnswer);
    console.log(UserSelectedVals.buttonid);

    var btnChoice = $('#' + UserSelectedVals.buttonid);
    console.log('btnChoice:::', btnChoice);

    //start hilighting buttons
    if (UserSelectedVals.isRight) {
        btnChoice.addClass('grnback');
    } else {
        btnChoice.addClass('rdback');
        //loop through buttons to find the one with correct ans
        $('button').each(function () {
            if ($(this).text() === UserSelectedVals.correctAnswer) {
                $(this).addClass('grnback');
            }

        });

    }
    setTimeout(populateHtml, 600);
}



$(document).ready(function () {    

    initializeGame();

    $('.grid').hide(); // hide main screen only show splash & button

    $('#dStart').click(function () {  //add click funtionality to start page fake button
        $('#splashscreen').remove();
        $('.grid').show();
        console.log('doc ready bstart click');
    });
   
    //add click event to buttons
    $('button').click(function () {
        var bID = $(this).attr("id");
        console.log("ButtonClicked doc ready", bID, $(this).html());
        var UserSelectedVals = quiz.guess($(this).html());  //38.29
        UserSelectedVals.setButtonId(bID);
        if (bID === 'bStart') {
            $('#splashscreen').remove();
            $('.grid').show();
        } else {
            hiLiteButtons(UserSelectedVals);
        }
    })

    populateHtml();

});


