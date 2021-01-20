window.onload= function() {
    show(0);
}

var questions = [
    {
        id: 1,
        question: "what is the full form of RAM",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomly Access Memory",
            "Run Aceecpt Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "what is the full form of ROM",
        answer: "Random Only Memory",
        options: [
            "Random Access Memory",
            "Random Only Memory",
            "Run Aceecpt Memory",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "what is the full form of CPU",
        answer: "Central proccessing unit",
        options: [
            "Random Access Memory",
            "Randomly Access Memory",
            "Run Aceecpt Memory",
            "Central proccessing unit"
        ]
    },

]
    function submitForm(e){
    e.preventDefault();
    var name = document.forms["welcome-form"]["name"].value;
    localStorage.setItem("name", name);
    userName = localStorage.getItem(name);
    location.href = "quiz.html"
    }

var questionCount = 0;
var quizScore = 0;

function next(){

    let userAnswer = document.querySelector("li.option.active").innerHTML;
    if (questionCount == questions.length -1) {
        location.href = "end.html"
    }
    var correctAns = questions[questionCount].answer
    if(userAnswer === correctAns){
        quizScore= +10;
        localStorage.setItem("points", quizScore);
    } else{
        console.log("wrong!!!");
    }
    questionCount++;
    show(questionCount);
}

function previous(){
    questionCount--;
    show(questionCount);
}


function show(count){
    var question = document.getElementById("question");
    question.innerHTML = `<h2>${questions[count].question}</h2>
    <ul class="option-group"> 
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
    </ul>    

    `;
    toggleActive();
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
         option[i].addEventListener("click",function(){
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }                
            }
            option[i].classList.add("active");
        });

    }
}