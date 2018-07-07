 var computerGuess;
 var userGuessLog = [];
 var attempts = 0;
 var maxGuesses = 10;

 function gameEnded() {
     document.getElementById('newGameButton').style.display = 'inline';
     document.getElementById('easyBTN').style.display = 'none';
     document.getElementById('hardBTN').style.display = 'none';
     document.getElementById('inputBox').setAttribute('readonly', 'readonly');
 }

 function easyMode() {
     maxGuesses = 10;
     document.getElementById('easyBTN').className = 'activeButton';
     document.getElementById('hardBTN').className = '';
 }

 function hardMode() {
     maxGuesses = 5;
     document.getElementById('hardBTN').className = 'activeButton';
     document.getElementById('easyBTN').className = '';
 }

 function newGame() {
     window.location.reload();
 }

 function init() {
     computerGuess = Math.floor(Math.random() * 100 + 1);
     // console.log(computerGuess);

     document.getElementById('newGameButton').style.display = 'none';
 }

 function compareGuess() {
     var userGuess = " " + document.getElementById('inputBox').value;
     // console.log(userGuess);

     userGuessLog.push(userGuess);
     //  console.log(userGuessLog);
     document.getElementById('guessLog').innerHTML = userGuessLog;

     attempts++;
     document.getElementById('attempts').innerHTML = attempts;

     if (userGuessLog.length < maxGuesses) {
         if (userGuess > computerGuess) {
             document.getElementById('textOutput').innerHTML = 'Your guess is to high';
             document.getElementById('inputBox').value = "";
         } else if (userGuess < computerGuess) {
             document.getElementById('textOutput').innerHTML = 'Your guess is to low';
             document.getElementById('inputBox').value = "";
         } else {

             document.getElementById('textOutput').innerHTML = 'Correct! You got it in  ' + attempts + ' attempts';
             document.getElementById('container').style.backgroundColor = 'green';
             gameEnded();

         }

     } else {
         if (userGuess > computerGuess) {
             document.getElementById('textOutput').innerHTML = 'You lose!' + '<br> The number was ' + computerGuess;
             document.getElementById('container').style.backgroundColor = '#e82c4e';
             gameEnded();

         } else if (userGuess < computerGuess) {
             document.getElementById('textOutput').innerHTML = 'You lose!' + '<br> The number was ' + computerGuess;
             document.getElementById('container').style.backgroundColor = '#e82c4e';
             gameEnded();

         } else {
             document.getElementById('textOutput').innerHTML = 'Correct! You got it in  ' + attempts + '  attempts';
             document.getElementById('container').style.backgroundColor = 'green';
             gameEnded();


         }

     }

 }