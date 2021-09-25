
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
}

function makeSelected(id) {
  id.classList.add("selected")
  console.log(id)
}