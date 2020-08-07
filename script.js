//Set initial value to variables
var count = 76;
var currentQuestion = 0;
var score = 0;

//Connect to HTML and store it in variables
var hTag = document.querySelector("h1");
var ptag = document.querySelector("p");
var divTag = document.querySelectorAll("div");
var startBttn = document.getElementById("startQuiz");
var timer = document.querySelector("h4");

var radio = document.querySelectorAll("radio");
var allDone = document.querySelector("#allDone");
var content = document.getElementsByClassName("content");

var countEl = document.querySelector("#count");
var questionE1 = document.getElementById("quizQuestion");
var rightOrwrong = document.querySelector("#rightOrWrong");
var displayAnswer = document.querySelector("#displayAnswer");
var finalScore = document.querySelector("#finalScore");
var enterInitials = document.querySelector("#enterInitials");
var submit = document.querySelector("#submit");
var submitBtn = document.querySelector("#submitBtn");
var highscore = document.querySelector("highscore");
var highscoreList = document.querySelector("highscoreList");
var goBackBtn = document.querySelector("goBack");
var clearHighscoresBtn = document.querySelector("clearHighscores");

var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

//timer.setAttribute("style", "margin-left:1000px ; margin-bottom:100px ;");
//hTag.setAttribute("style", "text-align:center");
// ptag.setAttribute(
//   "style",
//   "font-size: 20px",
//   "font-family:Helvetica, sans-serif"
// );
// divTag[0].setAttribute("style", "text-align:center");
// startBttn.setAttribute("style", "background-color : purple");

//Load question and answer in array objects
var myQuestion = [
  {
    question: "Which one is not a vegetable?",
    options: ["1.orange", "2.Tomato", "3.cabbage", "4.beet"],
    answer: "1.orange",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    options: ["1.Node.js", "2.TypeScript", "3.npm", "4.javascript"],
    answer: "3.npm",
  },
  {
    question: "Who was the father of computer?",
    options: [
      "1.Charlie Babbage",
      "2.Dennis Ritchie",
      "3.Charles Babbage",
      "4.Ken Thompson",
    ],
    answer: "3.Charles Babbage",
  },
  {
    question: "What is the full form of ALU?",
    options: [
      "1.Arithmetic Logic Unit",
      "2.Arithmetic Local Unit",
      "3.Advance Logical Unit",
      "4.None of these",
    ],
    answer: "1.Arithmetic Logic Unit",
  },
  {
    question: "The Operating System is a:",
    options: [
      "1.System Software",
      "2.Application Software",
      "3.utility Software",
      "Malware ",
    ],
    answer: "1.System Software",
  },
];
var totQuestions = myQuestion.length;
var newDiv = document.createElement("div");
newDiv.setAttribute("id", "div-btn");

//It sets the timer on and off when this method is called
function setTime() {
  var timerInterval = setInterval(function () {
    count -= 1;
    countEl.textContent = count;
    if (count === 0 || currentQuestion === totQuestions) {
      clearInterval(timerInterval);
      navigateAllDone();
      //sendMessage();
    }
  }, 1000);

  content[0].setAttribute("style", "display:inline-block;");
  hTag.setAttribute("style", "display:none");
  ptag.setAttribute("style", "display:none");
  startBttn.setAttribute("style", "display:none");
  loadQuestion();
}

//This loads questions from array object "myQuestion"
function loadQuestion() {
  var index = myQuestion[currentQuestion];
  console.log(myQuestion[currentQuestion]);
  if (currentQuestion < totQuestions) {
    console.log(currentQuestion);
    console.log(totQuestions);

    questionE1.textContent = currentQuestion + 1 + "." + index.question;
    loadAnswer();
  } else {
    navigateAllDone();
  }
}

//when the timer is equal to '0' or all the questions where answered , this method is called to navigate to the All Done! page
function navigateAllDone() {
  questionE1.setAttribute("style", "display:none;");
  allDone.setAttribute("style", "display:block;");
  finalScore.textContent = "Your final score is " + score;
  enterInitials.setAttribute("style", "display:block;");
}

//Sets answer from array object to the buttons
function loadAnswer() {
  for (var i = 0; i < myQuestion[currentQuestion].options.length; i++) {
    var button = document.createElement("button");
    questionE1.appendChild(newDiv);
    newDiv.appendChild(button);
    button.setAttribute(
      "style",
      "display:block; background-color:purple; margin-top: 30px; padding: auto;font-weight: 100;font-size: large;font-family: sans-serif; color: white;"
    );
    button.setAttribute("class", "choices");
    button.textContent = myQuestion[currentQuestion].options[i];
  }
}

//When any button event is clicked ,it gets the inner text value and pass it to the other method to comparre the value
newDiv.onclick = function (event) {
  validateAnswer(event.target.innerText);
};

//It validates the answer from array "myQuestion" and the previous function
function validateAnswer(txt) {
  if (myQuestion[currentQuestion].answer === txt) {
    rightOrwrong.setAttribute("style", "display:block");
    displayAnswer.textContent = "Right!";
    score += 10;
  } else {
    count = count - 5;
    rightOrwrong.setAttribute("style", "display:block");
    displayAnswer.textContent = "Wrong!";
  }

  setTimeout(function () {
    rightOrwrong.setAttribute("style", "display:none;");
    currentQuestion++;
    removeButton();
    loadQuestion();
  }, 2000);
}

//To remove the butons before the next quesion loads
function removeButton() {
  var rem = document.querySelectorAll(".choices");
  for (var i = 0; i < rem.length; i++) {
    rem[i].remove();
  }
}

//Step 2: This event is executed and calls SetTime function when the user clicks on the "start Quiz" button
startBttn.addEventListener("click", setTime);

//Step 1: Executes when the page is loaded
function load() {
  content[0].setAttribute("style", "display:none;");
}
window.addEventListener("load", load);

function highscore() {
  console.log("highscore method is called");
  location.href = "highscores.html";
}
submitBtn.addEventListener("click", highscore);

function goBack() {
  location.href = "index.html";
}

goBack.addEventListener("click", goBack);
