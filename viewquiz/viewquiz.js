let questions = []
let currentPosition = 0
let url = "./test.json"
let numAnswers = 4
let selectedAnswer = null
let shownAnswers = []
let currentQuestion = null
let answersRevealed = false;

fetch(url, {method: 'GET',})
  .then(Response => Response.json())
  .then(data => start(data))




function start(data) {
  questions = data.questions
  document.getElementById("title").innerText = data.title
  document.getElementById("description").innerText = data.description
  console.log(questions)
  document.getElementById("progress").max = questions.length;
  renderQuestion()
}

function renderQuestion() {
  currentQuestion = questions[currentPosition]
  shownAnswers = generate(currentQuestion)
  trueRender(shownAnswers)
}

function checkBtnBehavior(self) {
  if (self.innerText == "Next") {
    answersRevealed = false;
    self.innerText = "Check"
    renderQuestion();
  } else if (self.innerText == "Check") {
    document.getElementById("progress").value = ++currentPosition
    revealAnswers(shownAnswers)
  } else if (self.innerText == "Done") {
    console.log("done")
  }
}

function revealAnswers(arr) {
  for (let i = 0; i < arr.length; i++) {
    let x = document.getElementById(`q${i}`)
    console.log(x);
    x.classList.add(arr[i] == currentQuestion.definitions[0] ? "correct" : "wrong")
  }

  selectedAnswer = null;
  answersRevealed = true;
  if (currentPosition != questions.length) {
    document.getElementById("checkBtn").innerText = "Next";
  } else {
    document.getElementById("checkBtn").innerText = "Done";
  }
}

function trueRender(arr) {
  buffer = ""
  for (let i = 0; i < arr.length; i++) {
    buffer += `
    <div class="answers" id="q${i}"onclick="makeSelected(this)">
      <p class="unselectable">
      ${arr[i]}
      </p>
    </div>
    `
  }
  buffer += `
    <button onclick="checkBtnBehavior(this)" id="checkBtn" disabled=${selectedAnswer == null}>
      Check
    </button>
  `

  document.getElementById("term").innerText = currentQuestion.term
  document.getElementById("answersContainer").innerHTML = buffer;
}

function generate(cq) {
  arr = []
  arr.push(cq.definitions[0])
  for (let i = 0; i < numAnswers - 1; i++) {
    x = parseInt(Math.random() * questions.length)
    if (questions[x].definitions[0] != cq.definitions[0]) {
      arr.push(questions[x].definitions[0])
    }
    else {
      i--;
    }
  }
  return arr
}



function makeSelected(id) {
  document.getElementById("checkBtn").disabled = false;
  if (selectedAnswer != null) {
    selectedAnswer.classList.remove("selected")
  }
  selectedAnswer = id
  if (id.classList.contains("selected")) {
    id.classList.remove("selected")
  } else {
    id.classList.add("selected")
  }
  console.log(id)
}