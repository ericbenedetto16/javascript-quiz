var completed = false;
var cancelled = false;
var quiz1 = ["How interested are you in knowing how the components of your computer works?", "How interested are you in following news relating to new computer hardware releases?", "How interesed are you in maintaining your computer hardware?", "How interested are you in the specific brands of hardware you use?"];
var res1 = ["Based on your score, you are interested in Computer Engineering", "Based on your score, you seem to like to understand how things work", "Based on your score, you do not seem like you are into computers and their parts"];
var quiz2 = ["How interested are you in understanding how software runs on your computer?", "How interested are you in developing software?", "How interested are you in testing new software?", "How interested are you in following big software corporations?"];
var res2 = ["Based on your score, you are interested in becoming a Developer", "Based on your score, you like to know what goes on with your computer", "Based on your score, you have 13 malicious toolbars on Internet Explorer"];
var quiz3 = ["How interested are you in understanding how the internet functions?", "How interested are you in knowing what iPv6 protocol is?", "How interested are you in monitoring your network usage with third-party applications such as GlassWire?", "How interested are you in sniffing, penetrating, and testing?"];
var res3 = ["Based on your score, you are a BlackHat hacker", "Based on your score, you like to make sure no one is sneaking on your internet", "Based on your score, you use the internet but do not understand it"];
var ans = ["Unsure", "Not Interested", "Somewhat Interested", "Very Interested"];
var userInput = 0;
var answer = "";
var userAnswers = [];
var score = 0;

execute();

function getUserSelection() {
  var quizSelection = prompt("Choose the Number of Which Quiz You Like To Take: " + "\n" + "1. Computer Hardware, 2. Computer Software, 3. The Internet");
  userInput = quizSelection;
  if(userInput > 0 && userInput < 4) {
    runQuiz();
  }else if(userInput == null){

  }else{
    alert("Enter a number between 1 and 3. Try Again.");
    getUserSelection();
  }
}

function runQuiz() {
 if(userInput == 1) {
   displayQuiz(quiz1);

   if(completed && !cancelled) {
     calculateScore();
     showResults(res1, score);
   }
 }else if(userInput == 2) {
    displayQuiz(quiz2);

    if(completed && !cancelled) {
      calculateScore();
      showResults(res2, score);
    }
 }else {
    displayQuiz(quiz3);
    if(completed && !cancelled) {
      calculateScore();
      showResults(res3, score);
    }
  }
}

function displayQuiz(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(!cancelled) {
      var q = prompt(arr[i] + "\n" + ans);
      if(q == "Very Interested") {
        userAnswers.push(q);
      }else if(q == "Somewhat Interested") {
        userAnswers.push(q);
      }else if(q == "Not Interested") {
        userAnswers.push(q);
      }else if(q == "Unsure") {
        userAnswers.push(q);
      }else if(q == null){
        cancelled = true;
        break;
      }else{
        q = "wrong";
        alert("Not a valid choice. Check spelling and capitalization.");
        while(q == "wrong") {
          q = prompt(arr[i] + "\n" + ans);
          if(q == "Very Interested") {
            userAnswers.push(q);
          }else if(q == "Somewhat Interested") {
            userAnswers.push(q);
          }else if(q == "Not Interested") {
            userAnswers.push(q);
          }else if(q == "Unsure") {
            userAnswers.push(q);
          }else if(q == null){
            cancelled = true;
            break;
          }else{
            q = "wrong";
            alert("Not a valid choice. Check spelling and capitalization.");
          }
        }
      }
        completed = true;
    }
  }
}

function calculateScore() {
  score = 0;
  for(var i = 0; i < userAnswers.length; i++) {
    if(userAnswers[i] == "Very Interested") {
      score+=3;
    }else if(userAnswers[i] == "Somewhat Interested") {
      score+=2
    }else if(userAnswers[i] == "Not Interested") {
      score--;
    }else{
      score = score;
    }
  }
}

function showResults(resArr, score) {
  if(score < 4) {
    alert(resArr[2]);
  }else if(score < 8 && score > 3) {
    alert(resArr[1]);
  }else {
    alert(resArr[0]);
  }
}

function execute() {
  getUserSelection();
}
