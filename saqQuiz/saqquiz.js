questionType = ""
let questions = []
let currentPosition = 0
let url = "../testdata/test.json"
let numAnswers = 4
let selectedAnswer = null
let shownAnswers = []
let currentQuestion = null
let answersRevealed = false
let answeringWithDefinition = true

fetch(url, { method: 'GET', })
    .then(Response => Response.json())
    .then(data => start(data))


function start(data) {
    console.log(data)
    questions = data.questions
    document.getElementById("title").innerText = data.title
    document.getElementById("description").innerText = data.description
    console.log(questions)
    document.getElementById("progress").max = questions.length
    // disables / enables submit button based on if the answerbox is empty
    document.getElementById("answerBox").oninput = function(){
        document.getElementById("checkBtn").disabled = document.getElementById("answerBox").value == ""
    }
    renderQuestion()
}

function revealAnswers() {

}

function renderQuestion() {
    buffer = ``
    
    
}

function definitionToggle(caller) {
    if (caller.checked) {
        document.getElementById("typeLabel2").innerText = "TERM"
        document.getElementById("typeLabel1").innerText = "DEFINITION"
    } else {
        document.getElementById("typeLabel1").innerText = "TERM"
        document.getElementById("typeLabel2").innerText = "DEFINITION"
    }
}