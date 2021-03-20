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

function start(){
        if(prompt("Компьютер на английском языке...") == 'computer'){
                correctAnswer();
        
        } else {
                incorrectAnswer('computer');
                
        }
        
        if(prompt("Звук на английском языке...") == 'sound'){
                correctAnswer();
        
        } else {
                incorrectAnswer('sound');
                
        }
        
        if(prompt("Дом на английском языке...") == 'home'){
                correctAnswer();
        } else {
                incorrectAnswer('home');
        }
        
        
        if(prompt("Ноутбук на английском языке...") == 'laptop'){
                correctAnswer() 
            } else {
                incorrectAnswer('laptop');
            }
        if(prompt("ПК на английском языке...") == 'PC'){
                correctAnswer();
        
        } else {
                incorrectAnswer('PC');
                
        }
        if(prompt("Привет на английском языке...") == 'Hello'){
                correctAnswer();
        } else {
                incorrectAnswer('Hello');
        }
        
        if(prompt("Играть на английском языке...") == 'Play'){
                correctAnswer();
        } else {
                incorrectAnswer('Play');
        }
        if(prompt("можно? на английском языке...") == 'Can I?'){
                correctAnswer();
        } else {
                incorrectAnswer('Can I?');
        }
        
        
        
            alert('У вас ' + correctAnswers + ' правильных ответов')
            alert('У вас ' + incorrectAnswers + ' не правильных ответов')
}


