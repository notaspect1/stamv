
let questions = []
let currentPosition = 0;
let url = "./test.json"


fetch(url, {method: 'GET',})
  .then(Response => Response.json())
  .then(data => doStuff(data))

function doStuff(data) {
  questions = data.questions
  document.getElementById("title").innerText = data.title
  document.getElementById("description").innerText = data.description
  console.log(data)
  cardUpdate()
}

function cardUpdate() {
  currentPosition = Math.max(Math.min(questions.length - 1, currentPosition), 0)
  document.getElementById("displayTerm").innerText = questions[currentPosition].term
  document.getElementById("displayDefinition").innerText = questions[currentPosition].definitions[0]
}


document.getElementById("leftArrow").classList.add("disabled")


//button onclicks
document.getElementById("rightArrow").onclick = function() {
  currentPosition++;
  if (currentPosition == questions.length - 1) {
    document.getElementById("rightArrow").classList.add("disabled")
  }
  document.getElementById("leftArrow").classList.remove("disabled")
  cardUpdate()
}

document.getElementById("leftArrow").onclick = function() {
  currentPosition--;
  if (currentPosition == 0) {
    document.getElementById("leftArrow").classList.add("disabled")
  }
  document.getElementById("rightArrow").classList.remove("disabled")
  cardUpdate()
}
