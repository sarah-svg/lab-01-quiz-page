import { countsAsAYes } from './countsAsAYes.js';

const button = document.getElementById('launch-button');
const results = document.getElementById('results');
  
button.addEventListener('click', () => {
    
    //Number 1
    const userName = prompt('What is your name?');
    const userHasConfirmed = confirm('Do you really want to take this quiz?');
  
    if (!userHasConfirmed) {
        alert('you have opted out. congrats!');
        return;
    }
    
    let correctAnswers = 0;
    const characterResponse = prompt(`Okay ${userName}! Is the main character Scrooge McDuck?`);
   //number2
    if (countsAsAYes(characterResponse)) {
        correctAnswers++;
    }
  
    const historyResponse = prompt(`Okay ${userName}! Is Scrooge McDuck family from McDuck castle?`);
  //number3
    if (countsAsAYes(historyResponse)) {
        correctAnswers++;
    }
      
    const nephewsResponse = prompt(`Okay ${userName}! Does Scrooge Mcduck have three nepehws?`);
    if (!countsAsAYes(nephewsResponse)) {
        //number4 
        correctAnswers++;
    }
    const enemyResponse = prompt(`Okay ${userName}! Is one of Scoogie,s enemies The Beagle Boys?`);
  
      
    if (!countsAsAYes(enemyResponse)) {
        //number5 
        correctAnswers++;
    }
      
  
    
    alert('Quiz complete! Check the page for your results');
    results.textContent = `Hey ${userName}, you got ${correctAnswers} right out of 4.`;
});