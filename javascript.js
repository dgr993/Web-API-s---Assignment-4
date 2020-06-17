var welcomDiv = document.querySelector(".welcomePage");
var questionsDiv = document.querySelector(".questionsDiv");
var startBtn = document.querySelector(".startBtn");
var questionsH1 = document.querySelector(".questions");
var appendHere = document.querySelector(".appendHere");
var answerBtn = document.querySelector(".answerBtn");
var playButton = document.querySelector("#play");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var row = document.querySelector(".row")
var resultsDiv = document.querySelector(".resultsPage")
var submitBtn = document.querySelector(".submitBtn");
var results = document.querySelector(".results");
var numbercorrect=0;
var highscores = document.querySelector(".scorePtag")
var highscoresDiv = document.querySelector(".highscores")

var totalSeconds = 0;
var secondsElapsed = 0;
var index = 0;
var interval;
var i = 0;
var scoreList = [];

//start of timer

if (localStorage.getItem("key")) {
  scoreList = JSON.parse(localStorage.getItem("key"))

}
function showScores() {
  highscoresDiv.innerHTML = "";
  for (var i = 0; i < scoreList.length; i++) {
      console.log("HERE:", scoreList[i][0] + scoreList[i][1])
      var par = document.createElement("p");
      par.innerText = scoreList[i][0] + " " + scoreList[i][1]
      highscoresDiv.appendChild(par)
  }
}

showScores()
function getFormattedMinutes() {
    //
    var secondsLeft = totalSeconds - secondsElapsed;
  
    var minutesLeft = Math.floor(secondsLeft / 60);
  
    // var formattedMinutes;
  
    if (minutesLeft < 10) {
      formattedMinutes = "0" + minutesLeft;
    } else {
      formattedMinutes = minutesLeft;
    }
  
    // return formattedMinutes;
  }
  
  function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;
  
    var formattedSeconds;
  
    if (secondsLeft < 10) {
      formattedSeconds = "0" + secondsLeft;
    } else {
      formattedSeconds = secondsLeft;
    }
  
    return formattedSeconds;
  }

  function setTime() {
    var minutes;
      minutes = 1
  
    clearInterval(interval);
    totalSeconds = minutes * 60;
  }

  function renderTime() {
    // When renderTime is called it sets the textContent for the timer html...
    minutesDisplay.textContent = getFormattedMinutes();
    secondsDisplay.textContent = getFormattedSeconds();
  
   // ..and then checks to see if the time has run out
    if (secondsElapsed >= totalSeconds) {
      if (totalSeconds === 0 && minutes === 0) {
        
        
      }
  
      stopTimer();
      // alert("Time's Up");
      questionsDiv.style.display= "none";

      resultsDiv.style.display= "block";
      results.textContent= numbercorrect;
     
     
      highscoresDiv = JSON.parse(localStorage.getItem("numbercorrect"));
      submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        var userint = initials.value
        

        console.log("hey")
        localStorage.setItem("numbercorrect", JSON.stringify(numbercorrect));
        if (userint.length > 2 || initials.value.length == 0) {
          alert("You need at most two characters")
      }
      else {
        var p = [userint, numbercorrect];
        console.log("P:", p)
        scoreList.push(p)
        localStorage.setItem("key", JSON.stringify(scoreList));
        showScores();
        
    }
    highscoresDiv.appendChild(submitBtn)
    
});

      

      //tried to have a reset test button but couldnt figure it out
/*
      
      submitBtn.addEventListener("click", function(){
        welcomDiv.style.display="none"
        questionsDiv.style.display= "block"
        showQuestions();
    });
*/
    }
  }

  function startTimer() {
    setTime();
        interval = setInterval(function() {
          secondsElapsed++;
          renderTime();
        }, 1000);
    } 
  
    function stopTimer() {
      secondsElapsed = 0;
      setTime();
      renderTime();
    }

startBtn.addEventListener("click", startTimer);
// end of timer


var questionsArray=[
    {
        question:"Who invented JavaScript?",
        options:["Douglas Crockford","Sheryl Sandberg","Brendan Eich"],
        answer:"Brendan Eich"
    },
    {
        question:"What is an h1 tag?",
        options:["<h1>","<div>", "<script>"],
        answer:"<h1>"
    },
    {
        question:"Which is a self closing tag?",
        options:["<img>","<h3>", "<h1>"],
        answer:"<img>"
    },
    {
        question:"Which one of these is a JavaScript package manager?",
        options:["Node.js","TypeScript", "npm"],
        answer:"npm"
    },
    {
        question:"Which tool can you use to ensure code quality?",
        options:["Angular","jQuery", "RequireJS","ESLint"],
        answer:"ESLint"
    }
  
    
]
totalSeconds -=60;
questionsDiv.style.display= "none";
resultsDiv.style.display= "none";
highscoresDiv.style.display= "none";

highscores.addEventListener("click", function(){
  welcomDiv.style.display="none"
  questionsDiv.style.display= "none"
  highscoresDiv.style.display= "block"
});

startBtn.addEventListener("click", function(){
    welcomDiv.style.display="none"
    questionsDiv.style.display= "block"
    showQuestions();
});


function showQuestions(){
  
    questionsH1.textContent= questionsArray[index].question

    var myDiv= document.createElement("div")
    myDiv.setAttribute("class","row")

    for (i=0;i<questionsArray[index].options.length; i++){
        var button =document.createElement("button")
        button.setAttribute("class","btn btn-primary answerBtn col-12")
        button.setAttribute("type","button")
        button.textContent =questionsArray[index].options[i]
        myDiv.appendChild(button);
        console.log(i);
        console.log(questionsArray.length);
        
       
    };
    
    appendHere.appendChild(myDiv);
    
    //go to results page when end of questions
    /*if (index = questionsArray.length){
      totalSeconds=0;
    };*/
}

answerBtn.addEventListener("click", function(event){

    if (event.target.innerText == questionsArray[index].answer){

    alert("Correct");
    numbercorrect++;
    
  }

    else {
    alert("wrong answer")
    //minus 10 seconds from clock
    //totalSeconds = totalSeconds-10;
    totalSeconds-=10;

  };
    index++;
    appendHere.innerHTML = "";
    showQuestions();
});