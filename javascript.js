var welcomDiv= document.querySelector(".welcomePage");
var questionsDiv = document.querySelector(".questionsDiv");
var startBtn= document.querySelector(".startBtn");
var questionsH1 = document.querySelector(".questions");
var appendHere = document.querySelector(".appendHere");
var answerBtn = document.querySelector(".answerBtn");
var playButton = document.querySelector("#play");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var row = document.querySelector(".row")

var totalSeconds = 0;
var secondsElapsed = 0;
var index = 0;
var interval;

//start of timer
function getFormattedMinutes() {
    //
    var secondsLeft = totalSeconds - secondsElapsed;
  
    var minutesLeft = Math.floor(secondsLeft / 60);
  
    var formattedMinutes;
  
    if (minutesLeft < 10) {
      formattedMinutes = "0" + minutesLeft;
    } else {
      formattedMinutes = minutesLeft;
    }
  
    //return formattedMinutes;
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
        alert("Time's Up");
      }
  
      stopTimer();
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
        question:"What is a self closing tag?",
        options:["<img>","<h1>"],
        answer:"<img>"
    },
    {
        question:"What is an h1 tag?",
        options:["big size for header","like field", "return field"],
        answer:"big size for header"
    },
    {
        question:"What is an h3 tag?",
        options:["or not","please erase", "this is the answer"],
        answer:"or not"
    },
    {
        question:"What is an h4 tag?",
        options:["Okay","yep", "weird"],
        answer:"big size for header"
    },
    {
        question:"What is an h5 tag?",
        options:["oh my","test", "this"],
        answer:"big size for header"
    },
    {
        question:"What is an h1 tag?",
        options:["big size for header","like field", "return field"],
        answer:"big size for header"
    },
    {
        question:"What is an h1 tag?",
        options:["big size for header","like field", "return field"],
        answer:"big size for header"
    },
    {
        question:"What is an h1 tag?",
        options:["big size for header","like field", "return field"],
        answer:"big size for header"
    }
]

questionsDiv.style.display= "none"


startBtn.addEventListener("click", function(){
    welcomDiv.style.display="none"
    questionsDiv.style.display= "block"
    showQuestions()
})


function showQuestions(){
    questionsH1.textContent= questionsArray[index].question

    var myDiv= document.createElement("div")
    myDiv.setAttribute("class","row")

    for (var i=0;i<questionsArray[index].options.length; i++){
        var button =document.createElement("button")
        button.setAttribute("class","btn btn-primary answerBtn col-12")
        button.setAttribute("type","button")
        button.textContent =questionsArray[index].options[i]
        myDiv.appendChild(button);
        
    }
   
    appendHere.appendChild(myDiv);
}

answerBtn.addEventListener("click", function(event){

    if (event.target.innerText == questionsArray[index].answer){

    alert("Correct");
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