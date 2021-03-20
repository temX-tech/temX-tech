var correctAnswers = 0;
var incorrectAnswers = 0;

function correctAnswer(){
        correctAnswers = correctAnswers + 1;
        alert('Правильно!')
}
function incorrectAnswer(message){
        incorrectAnswers = incorrectAnswers + 1;
        alert('Не правильно! \nПравильный ответ "' + message + '"');
}




var questions = ["Яблоко на английском..." , "Луна на английском..." , "Планета на английском..."];
var answers = ["Apple" , "Moon" , "Planet"];


        questions.forEach(function(Element, Index) {
                
                if (prompt(Element) == answers[Index]){
                        correctAnswer();
                } else{
                        incorrectAnswer(answers[Index]);
                }
        });

        
        alert("У вас " + correctAnswers + " правильных ответов и " + incorrectAnswers + " неправильных ответов");
        


