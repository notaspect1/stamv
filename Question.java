
class Question{
  
    private var question = "";
    private var responseList = [];
    private var correctAnswerIndexes = [];
    private var selectedList = [];
    
    
    constructor(){
      
    }
  
    constructor(question, responseList){
      this.question = question;
      this.responseList = responseList;
    }
    
   get currentQuestion(){
     return question; 
     
   }
   set currentQuestion(newQuestion){
     question = newQuestion;
   }
   get response(){
     return responseList;
   }
   get selected(){
     return selectedList;
     
   }
  get correctAnswer(){
    return correctAnswerIndexes;
  }
  
   public isCorrect(){
     if(correctAnswerIndexes.length != selectedList.length){
       return false;
     }
     for(var i =0; i<correctAnswerIndexes.length; i++){
       if(correctAnswerIndexes[i] != selectedList[i]){
         return false;
       }
     }
     return true;
   }
  
   
  
  
}
