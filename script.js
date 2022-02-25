//define global variables

// let choice = document.querySelectorAll(.answerBtns)
let questionEl = document.getElementById('show-question');
let btn1El = document.getElementById('btn1');
let btn2El = document.getElementById('btn2');
let btn3El = document.getElementById('btn3');
let btn4El = document.getElementById('btn4');

// let questionEl = document.getElementById('question-container');
let answers = document.getElementById('answer-btns');
let currentQuestion = 0


let welcomePage = document.querySelector('#welcomePage');

let timer;
let timerElement = document.querySelector('#timerElement');
let timerCount = 30;


//make timer start when start button is clicked
let submit = document.querySelector('#submit')
let finalScore = 0
let initials = document.getElementById('initials')
let form = document.getElementById('form')
let highScore = document.getElementById('high-score')
let questionContainerEl = document.getElementById('question-container');
let startButton = document.querySelector('#start-button');
let nextButton = document.querySelector('#next-btn');
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', next);
btn1El.addEventListener('click', handleAnswer);
btn2El.addEventListener('click', handleAnswer);
btn3El.addEventListener('click', handleAnswer);
btn4El.addEventListener('click', handleAnswer);



let Questions = [
    {
        title: 'Which is an HTML element?',
        choice1: '<r>',
        choice2: '<j1>',
        choice3: '<mr>',
        choice4: '<p>',
        answer: '<p>'
    },
    {
        title: 'How do you make a display responsive?',
        choice1: 'flex',
        choice2: 'fixed',
        choice3: 'block',
        choice4: 'center',
        answer: 'flex',
    }
]



function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        console.log(timerCount)
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            highScore.classList.remove('hide')
            questionContainerEl.setAttribute('class', 'hide')
            form.classList.remove('hide')
            finalScore = timerCount
            clearInterval(timer)
        };
    }, 1000)
}

function startQuiz() {
    welcomePage.setAttribute('class', 'hide')
    startButton.setAttribute('class', 'hide')
    startTimer()
    questionContainerEl.classList.remove('hide')
    getQuestion(currentQuestion)
    Questions[currentQuestion]
    
}


function getQuestion (currentQuestion) {
    questionEl.innerText = Questions[currentQuestion].title

    btn1El.innerText = Questions[currentQuestion].choice1
    btn2El.innerText = Questions[currentQuestion].choice2
    btn3El.innerText = Questions[currentQuestion].choice3
    btn4El.innerText = Questions[currentQuestion].choice4

}

function next() {
    currentQuestion++;
    if (currentQuestion >= Questions.length){
        highScore.classList.remove('hide')
        questionContainerEl.setAttribute('class', 'hide')
        form.classList.remove('hide')
        finalScore = timerCount
    }
    getQuestion(currentQuestion);
    
}

function handleAnswer(event) {
    // console.log(event.target)
    let userChoice= event.target.innerText;
    console.log(userChoice)
    
    if (userChoice !== Questions[currentQuestion].answer){
        timerCount = timerCount-10;
    }
    next()
    
}




submit.addEventListener("click", function() {
      localStorage.setItem("high-score", finalScore+'-'+ initials.value);
    }
  );
//on start welcome page should go away, timer start, and first question should pop up


