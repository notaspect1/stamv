//there should be a function to fill in previous questions witht he same id im thinking base 64 8 digit thing


let QuizName = "Default"
let Description = "Lorem ipsum dolor sit am tempor inciliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
let Visibility = 1
let amount = 0
/* 



Fetch Data Here


*/





document.getElementById("quizName").value = QuizName
document.getElementById("quizDescription").value = Description
document.getElementById("visiblityDropdown").value = Visibility


var addQuestionTemplate =`      
<div id="question${amount}" class="questions">
    <h3>Question ${amount}</h3>
    <label class="fakeLabel" for="term${amount}">Term</label> 
    <input type="text" name="quizName" id="quizName">
    <button class="deleteButton">Delete</button>
    <div class="definitions">
        <label class="fakeLabel" for="definition${amount}">Definition</label> 
        <textarea type="text" class="definition" name="definition${amount}" id="definition${amount}"></textarea>
    </div> 
</div>
`;

/* 

Fill in already written questions from fetched data here using a for loop it should set the amount variable as well

*/

document.getElementById("addQuestion").onclick = function(){
    amount++
    addQuestionTemplate =`      
    <div id="question${amount}" class="questions">
        <h3>Question ${amount}</h3>
        <label class="fakeLabel" for="term${amount}">Term</label> 
        <input type="text" name="quizName" id="quizName">
        <button class="deleteButton">Delete</button>
        <div class="definitions">
            <label class="fakeLabel" for="definition${amount}">Definition (optional)</label> 
            <textarea type="text" class="definition" name="definition${amount}" id="definition${amount}"></textarea>
        </div> 
    </div>
    `;

    document.getElementById("listOfQuestions").innerHTML += addQuestionTemplate
}