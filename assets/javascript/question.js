
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
           return true;
       } else{
           return false;
       }
}



