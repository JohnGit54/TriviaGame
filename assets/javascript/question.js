
////////////////////
//class for questions this will hold class definition and 
// methods of class Question
//
// bleow this is the data 'questions'  to be consumed for the class questions
//
//
//  text - the actual question
// choices  - array of 4 answers for each button
// answer the correct answer to question
//
//
// method that checks if the selected answer was correct, ? here or controller
//  


function Question(text, choices,answer){
    this.text = text;
    this.choices = choices; //array 4 choices
    this.answer = answer;   
}

Question.prototype.correctAnswer = function(choice){
       //return ture or false 
       // using long winded way
       if( choice === this.answer){
           var userQuestion = new UserQuestion( true,choice,this.answer);
           return userQuestion; //true;
       } else{
           var userQuestion = new UserQuestion( false,choice,this.answer);
           return userQuestion; //false;
       }
}


function UserQuestion(isRight , userChoice , correctAnswer){
    this.isRight = isRight;
    this.userChoice = userChoice;
    this.correctAnswer = correctAnswer;
    this.buttonid = null;
}

UserQuestion.prototype.setButtonId=function(buttonId){
    console.log("in setButtonId=function(buttonId) " ,buttonId );
    this.buttonid = buttonId;
}



