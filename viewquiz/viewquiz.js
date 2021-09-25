
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
  console.log(data)
}

function makeSelected(id) {
  selectedAnswer = id
  if (id.classList.contains("selected")) {
    id.classList.remove("selected")
  } else {
    id.classList.add("selected")
  }
  console.log(id)
}