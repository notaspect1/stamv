
public class Question{
  
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
   get responses(){
     return responseList;
   }
   get selected(){
     return selectedList;
     
   }
  get correctAnswers(){
    return correctAnswerIndexes;
  }
  set correctAnswers(newAnswers){
    correctAnswerIndexes = newAnswers;
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
   
   public addResponse(response){
     responseList.push(response);
   }
   public removeResponse(index){
     responseList.splice(index, 1);
   }
   public selectQuestion(response){
     selectedList.push(responseList.indexOf(response));
   }
  public unselectQuestion(response){
     selectedList.remove(selectedList.indexOf(responseList.indexOf(response)),1);
   }
   
  
  
}
