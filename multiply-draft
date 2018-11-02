// Initializations
var x=0;
var x=0;
var userInput = 0;
var solution=0;
var stop = false;
var question = 0;
var correctAnswers = question-wrongAnswers;
var wrongAnswers = 0;
var correct = false;

// Code
for (question = 0; question < 3; question++){
  wrongAnswers=multiPractice(question);
}
alert("Out of "+question+" questions you got "+correctAnswers+ " correct and you got "+wrongAnswers+" incorrect.");
//alert(question+wrongAnswers+(question-wrongAnswers));

function multiPractice(question) {
  while(correct==false){
    x = Math.floor(Math.random()*7)+3;
    y = Math.floor(Math.random()*7)+3;
    solution = x*y;
    userInput = prompt("Question "+question+": What is "+x+" * "+y+"?");
    if (userInput == x*y){
      alert("That's correct! "+x+" * "+y+" = "+userInput+"!");
      correct = true;
    }
    else if(userInput == "stop"){
      alert("Question "+question+" has been stopped.");
      break;
    }
    else {
      alert("That's incorrect. Try Again!");
      wrongAnswers++;
    }
  }
  return wrongAnswers; 
}

// 1. Embed all code in a For loop that runs 10 times.
// 2. Move code parts 1-3 into a function called multiPractice, and call multiPractice within the For loop.
// 3. Count how many not-right-first-answers and return that count from multiPractice.
// 4. Accept manual input for loop (not 10 but "questions") and calculate percent correct first time. 
// 5. At "stop" or at loop end, report answer percent correct.  If no wrong answers, say "Charlie, you've won!"
