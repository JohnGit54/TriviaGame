
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
    this.wrong = 0;
    this.unanswered = 0;
}


Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}


Quiz.prototype.isEnded = function () {
    if (this.questions.length === this.questionIndex) {
        return true;
    } else {
        return false;
    }
}


Quiz.prototype.guess = function (answer) {
    console.log("Quiz Guess: ", answer);
    //this gets items class Question all items and question.correctAnser 
    var userResults = this.getQuestionIndex().correctAnswer(answer);
    //console.log( userResults.isRight);   
    if (answer === 'SKIPPED') {
        this.unanswered++;
    } else if (userResults.isRight) {
        this.score++;
    } else {
        this.wrong++;
    }
    this.questionIndex++;
    return userResults;
}

//no longer need, redeisgned app 7 sec func
Quiz.prototype.updatequestionIndex = function () {
    //this is sent here when user timed out on question     
    console.log('Quiz.prototype.updatequestionIndex');
    this.unanswered++;
    this.questionIndex++;
}

