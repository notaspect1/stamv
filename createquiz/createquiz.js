//there should be a function to fill in previous questions witht he same id im thinking base 64 8 digit thing


let QuizName = "Default"
let Description = "Lorem ipsum dolor sit am tempor inciliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
let Visibility = "Public" 
let amount = 0
/* 



Fetch Data Here


*/





document.getElementById("quizName").value = QuizName
document.getElementById("quizDescription").value = Description
document.getElementById("visiblityDropdown").value = Visibility


let addQuestionTemplate = `      
<div id="question${amount}" class="questions">
    <div class="top-area">
        <h3>${amount}</h3>
        <button class="deleteButton">Delete</button>
    <div>

    <div class="terms">
        <textarea onkeypress="textAreaUpdater(this)" type="text"  class="term" name="term${amount}" id="term${amount}"></textarea>
        <label class="fakeLabel" for="term${amount}">Term</label> 
    </div>

    <div class="definitions">
        <textarea onkeypress="textAreaUpdater(this)" type="text" class="term" name="definition${amount}" id="definition${amount}"></textarea>
        <label class="fakeLabel" for="definition${amount}">Definition</label> 
    </div> 
</div>
`;

let questionsList = []

/* 

Fill in already written questions from fetched data here using a for loop it should set the amount variable as well

*/


//add Question
document.getElementById("addQuestion").onclick = function () {
    refillList()
    amount++
    addQuestionTemplate = `      
    <div id="question/num/" class="questions">
        <div class="top-area">
            <h3>/num/</h3>
            <button class="deleteQuestion" onclick="removeQuestion(/num/)">Delete</button>
        </div>

        <div class="terms">
            <textarea onkeypress="textAreaUpdater(this)" type="text" class="term" name="term/num/" id="term/num/"></textarea>
            <label class="fakeLabel" for="term/num/">Term</label> 
        </div>

        <div class="definitions">
            <textarea onkeypress="textAreaUpdater(this)" type="text" class="term" name="definition/num/" id="definition/num/"></textarea>
            <label class="fakeLabel" for="definition/num/">Definition (optional)</label> 
        </div> 
    </div>
    `;

    questionsList.push(addQuestionTemplate);
    render()
}

//remove question
function removeQuestion(pos) {
    refillList()
    //console.log("removing question")
    questionsList.splice(pos, 1)
    render()
}

function refillList() {
    let term = ""
    let definition = ""
    for (let i = 0; i < questionsList.length; i++) {
        term = document.getElementById(`term${i}`).value.trim()
        definition = document.getElementById(`definition${i}`).value.trim()
        console.log(definition)
        questionsList[i] = `
        <div id="question/num/" class="questions">
            <div class="top-area">
                <h3>/num/</h3>
                <button class="deleteQuestion" onclick="removeQuestion(/num/)">Delete</button>
            </div>

            <div class="terms">
                <textarea onkeypress="textAreaUpdater(this)" type="text" class="term" name="term/num/" id="term/num/">${term}</textarea>
                <label class="fakeLabel" for="term/num/">Term</label> 
            </div>


            <div class="definitions">
                <textarea onkeypress="textAreaUpdater(this)" type="text" class="term" name="definition/num/" id="definition/num/">${definition}</textarea>
                <label class="fakeLabel" for="definition/num/">Definition (optional)</label> 
            </div> 
        </div>
        `
    }
}

function render() {
    let buffer = ""
    for (let i = 0; i < questionsList.length; i++) {
        buffer += (questionsList[i].replaceAll("/num/", i)) //I know replaceAll is relatively recent maybe we should use a more outdated method
        //console.log(buffer)
    }
    document.getElementById("listOfQuestions").innerHTML = buffer;
    // console.log(questionsList)
}