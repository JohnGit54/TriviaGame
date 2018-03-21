
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
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
    // this.questionIndex++;
    console.log("Quiz Guess: ", answer);
    //this gets items class Question all items and question.correctAnser 
	var userResults = this.getQuestionIndex().correctAnswer(answer);
	console.log( userResults.isRight);
    // if (this.getQuestionIndex().correctAnswer(answer)) {
    //     this.score++;
    // }

    if (userResults.isRight){
        this.score++;
    }
    this.questionIndex++;
    return userResults;
}


