class Quiz{
  
    var questionList = [];
    var currentQuestionIndex = 0;
    
    constructor(){
      questionList.push(new Question()); 
    }
  
    constructor(quizLength){
      for(var i =0; i<quizLength; i++){
        questionList.push(new Question());
      }
    }
    
    addQuestion(questionAdded){
      questionList.push(questionAdded);
    }
  
    get currentQuestion(){
       return guestionList[currentQuestionIndex]; 
    }
  
    nextQuestion(){
      currentQuestionIndex++; 
      //code here will be added later to switch questions
    }
  
    previousQuestion(){
      currentQuestionIndex--; 
      //code here will be added later to switch questions
    }
  
  
}
