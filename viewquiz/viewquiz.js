let terms = []
let definitions = []

let url = "./test.json"

json = await fetch(url, {method: 'GET',})
.then(function(response) {
    return response.json();
  })
console.log(json)
//   .then( res => res.json())
//   .then( data => console.log(data));


document.getElementById("displayTerm").innerText = "test"