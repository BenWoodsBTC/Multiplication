// Initialize Variables
var x = 0;
var y = 0;
var userInput = 0;
var solution = 0;
var question = 0;
var wrongAnswers = 0;
var totalQuestions = prompt("How many Questions?"); // Find out how many Questions the user wants
for(question = 0; question < totalQuestions; question++){ // For loop to let multiple questions possible
  wrongAnswers+=multiPractice();
}
if(wrongAnswers==0){
  alert("Charlie, you Won!"); // Tells Charlie that he's won if all the questions are correct
}
else {
  alert("You got " +wrongAnswers+ " out of " +question+ " wrong."); // Tells the user how amny they got wrong
}
function multiPractice(){
  x = Math.floor(Math.random()*7)+3; // Generates a random number between 3 and 9 for x
  y = Math.floor(Math.random()*7)+3; // Generates a random number between 3 and 9 for y
  solution=x*y; // Sets solution to x*y
  while(userInput!=solution){
    userInput = prompt(x+" * "+y+" = ?"); // Prompts the user to answer the question "x * y = ?"
    if(userInput==solution){
      alert("Correct!"); // Alerts correct if userInput equals solution
    }else if(userInput=="stop"){
      userInput=solution; // Stops the program if userInput equals stop
    }else{
      alert("Incorrect!"); // Alerts incorrect if userInput doesn't equal solution
      wrongAnswers++; // Adds 1 to wrongAnswers
    }
  }
  return wrongAnswers; // Returns either 1 or = for wrongAnswers
}
