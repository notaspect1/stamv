public class Quiz{
  
    private var questionList = [];
    private var currentQuestionIndex = 0;
    
    constructor(){
      questionList.push(new Question()); 
    }
  
    constructor(quizLength){
      for(var i =0; i<quizLength; i++){
        questionList.push(new Question());
      }
    }
    
    public removeQuestion(questionIndex){
       questionList.splice(questionIndex, 1);
    }
  
    public addQuestion(questionAdded){
      questionList.push(questionAdded);
    }
  
    get currentQuestion(){
       return questionList[currentQuestionIndex]; 
    }
  
    public nextQuestion(){
      currentQuestionIndex++; 
      //code here will be added later to switch questions
    }
  
    public previousQuestion(){
      currentQuestionIndex--; 
      //code here will be added later to switch questions
    }
  
  
}
