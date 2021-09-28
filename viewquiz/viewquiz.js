let questions = []
let currentPosition = 0
let url = "./test.json"
let numAnswers = 3
let selectedAnswer = null

fetch(url, {method: 'GET',})
  .then(Response => Response.json())
  .then(data => doStuff(data))

function doStuff(data) {
  questions = data.questions
  document.getElementById("title").innerText = data.title
  document.getElementById("description").innerText = data.description
  console.log(questions)
  generate(questions[parseInt(Math.random() * questions.length)])
}

function generate(correctQuestion) {
  arr = []
  arr.push(correctQuestion.definitions[0])
  for (let i = 0; i < numAnswers - 1; i++) {
    x = parseInt(Math.random() * questions.length)
    if (questions[x].definitions[0] != correctQuestion.definitions[0]) {
      arr.push(questions[x].definitions[0])
    }
  }

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

  document.getElementById("term").innerText = correctQuestion.term
  document.getElementById("answersContainer").innerHTML = buffer;
}

function makeSelected(id) {
  if (selectedAnswer != null) {
    selectedAnswer.classList.remove("correct")
  }
  selectedAnswer = id
  if (id.classList.contains("correct")) {
    id.classList.remove("correct")
  } else {
    id.classList.add("correct")
  }
  console.log(id)
}