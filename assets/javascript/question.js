
////////////////////
//class for questions this will hold class definition and 
// methods of class Question
//
//  text - the actual question
// choices  - array of 4 answers for each button
// answer the correct answer to question
//
//
// method that checks if the selected answer was correct, ? here or controller
//  
// created new class called UserSelectedVals - this object gets passed between classes
// hold if asnwer was right, what user selected, what correct answer is and after
// gets passed- adds the buttonid with UserSelectedVals.prototype.setButtonId method


function Question(text, choices,answer){
    this.text = text;
    this.choices = choices; //array 4 choices
    this.answer = answer;   
}

Question.prototype.correctAnswer = function(choice){
       //return ture or false 
       // using long winded way
       if( choice === this.answer){
           var userSelectedVals = new UserSelectedVals( true,choice,this.answer);
           return userSelectedVals; //true;
       } else{
           var userSelectedVals = new UserSelectedVals( false,choice,this.answer);
           return userSelectedVals; //false;
       }
}


function UserSelectedVals(isRight , userChoice , correctAnswer){
    this.isRight = isRight;
    this.userChoice = userChoice;
    this.correctAnswer = correctAnswer;
    this.buttonid = null;
}

UserSelectedVals.prototype.setButtonId=function(buttonId){
    console.log("in setButtonId=function(buttonId) " ,buttonId );
    this.buttonid = buttonId;
}



