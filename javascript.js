var welcomDiv= document.querySelector(".welcomePage")
var questionsDiv = document.querySelector(".questionsDiv")
var startBtn= document.querySelector(".startBtn")
var questionsH1 = document.querySelector(".questions")
var appendHere = document.querySelector(".appendHere")
var index = 0
var answerBtn = document.querySelector(".answerBtn")

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
        options:["or not","please erase", "thisis the answer"],
        answer:"big size for header"
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
        myDiv.appendChild(button)
        
    }
    appendHere.appendChild(myDiv)
}
answerBtn.addEventListener("click", function(){
    
    alert("this is the answer")
    index++;
    showQuestions();
});

// event listern to answerBtn , and when clicked you want to add to index , and run show questions function again