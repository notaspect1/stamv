//there should be a function to fill in previous questions witht he same id im thinking base 64 8 digit thing


let QuizName = ""
let Description = ""
let Visibility = "Public" 
let amount = 0
/* 



Fetch Data Here


*/





document.getElementById("quizName").value = QuizName
document.getElementById("quizDescription").value = Description
document.getElementById("visiblityDropdown").value = Visibility


let addQuestionTemplate = `      
<div id="question/num/" class="questions">
    <div class="top-area">
        <h3>/num/.</h3>
        <button class="deleteQuestion" onclick="removeQuestion(/num/)"></button>
    </div>

    <div class="terms">
        <textarea onkeypress="textAreaUpdater(this)" type="text"  class="term" name="term//num/" id="term/num/">/term/</textarea>
        <label class="fakeLabel" for="term/num/">Term</label> 
    </div>

    <div class="definitions">
        <textarea onkeypress="textAreaUpdater(this)" type="text" class="term" name="definition/num/" id="definition/num/">/def/</textarea>
        <label class="fakeLabel" for="definition/num/">Definition</label> 
    </div> 
</div>
`;

let questionsListProper = []

/* 

Fill in already written questions from fetched data here using a for loop it should set the amount variable as well

*/

//export data (unfinished)
document.getElementById("saveQuestions").onclick = function () {
    console.log(questionsListProper)
}


//add Question
document.getElementById("addQuestion").onclick = function () {
    refillList()
    amount++
    questionsListProper.push({"term":"", "definition":""})
     
    //questionsList.push(addQuestionTemplate);
    console.log(questionsListProper)
    render()
}

//remove question
function removeQuestion(pos) {
    refillList()
    //console.log("removing question")
    questionsListProper.splice(pos, 1)
    render()
}

function refillList() {
    let term = ""
    let definition = ""
    let templist = []
    for (let i = 0; i < questionsListProper.length; i++) {
        term = document.getElementById(`term${i}`).value.trim()
        definition = document.getElementById(`definition${i}`).value.trim()
        console.log(definition)
        templist.push({"term": term, "definition": definition})
    }
    questionsListProper = templist
}

function render() {
    let buffer = ""
    for (let i = 0; i < questionsListProper.length; i++) {
        //I know replaceAll is relatively recent maybe we should use a more outdated method
        buffer += addQuestionTemplate.replaceAll("/num/", i).replaceAll("/term/", questionsListProper[i].term).replaceAll("/def/", questionsListProper[i].definition) 
        //console.log(buffer)
    }
    document.getElementById("listOfQuestions").innerHTML = buffer;
    // console.log(questionsList)
}