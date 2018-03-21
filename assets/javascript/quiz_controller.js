function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}



Quiz.prototype.getQuestionIndex= function(){
    return this.questions[this.questionIndex];

}


Quiz.prototype.isEnded = function(){
    if ( this.questions.length === this.questionIndex){
        return true;
    }else{
        return false;
    }
}

    
Quiz.prototype.guess = function(answer){
     this.questionIndex++;

     //this gets items class Question all items and question.correctAnser  
     if (this.getQuestionIndex().correctAnswer(answer)  ){
         this.score++;
     }

}


