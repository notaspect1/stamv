let questions = []
let currentPosition = 0
let url = "./test.json"
let numAnswers = 4
let selectedAnswer = null
let shownAnswers = []
let correctAnswer = null

fetch(url, {method: 'GET',})
  .then(Response => Response.json())
  .then(data => doStuff(data))




function doStuff(data) {
  questions = data.questions
  document.getElementById("title").innerText = data.title
  document.getElementById("description").innerText = data.description
  console.log(questions)
  document.getElementById("progress").max = questions.length;
  renderQuestion()
}

function renderQuestion() {
  document.getElementById("progress").value = ++currentPosition;
  correctAnswer = questions[currentPosition]
  shownAnswers = generate(correctAnswer)
  trueRender(shownAnswers)
}

function revealAnswers(arr) {
  console.log("called")
  buffer = ""
  for (let i = 0; i < arr.length; i++) {
    buffer += `
    <div class="answers OTHERCLASS" onclick="makeSelected(this)">
      <p class="unselectable">
      REPLACE
      </p>
    </div>
    `.replace("REPLACE", arr[i])
    .replace("OTHERCLASS", (arr[i] == correctAnswer.definitions[0]) ? "correct" : "wrong")
  }

  document.getElementById("answersContainer").innerHTML = buffer;


}

function trueRender(arr) {
  buffer = ""
  for (let i = 0; i < arr.length; i++) {
    buffer += `
    <div class="answers" onclick="makeSelected(this)">
      <p class="unselectable">
      REPLACE
      </p>
    </div>
    `.replace("REPLACE", arr[i])
  }

  buffer += `
    <button onclick="revealAnswers(shownAnswers)" id="checkBtn">
      Check
    </button>
  `

  document.getElementById("term").innerText = correctAnswer.term
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