var words = ["England", "Scottland", "Ireland","Australia","Brazil","Belgium","Canada","Fiji","France","Israel",
             "Italy","Japan","Mexico","Portugal","Spain","Tonga"];
var guessedLetters = [];
var guessIndex, wordIndex,lettersFound,numOfGuesses;
var currentWord = [];
var randomWord = "";
var isStarted = false;

/*find all occurence of a letter in a word  */
function findLetterInWord(word,idx,element){
   var indices =[];  
    while (idx != -1) {
        indices.push(idx);
        idx = word.indexOf(element, idx + 1);
      }
    while (indices.length > 0){
        var letterPos = indices.pop();
        currentWord[letterPos] = element;
        lettersFound++;
    }
    document.getElementById("curWord").textContent = currentWord;
}
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    if ((/[a-zA-Z]/.test(userGuess)) && isStarted){
        guessIndex = guessedLetters.indexOf(userGuess);
        wordIndex = randomWord.indexOf(userGuess);
        /* not guesed yet and in word*/ 
        if ( (guessIndex === -1) && (wordIndex !== -1) ){
         /* find first index of letter. then search rest of word to see if letter occurs again make this a function */
         lettersFound++;
         findLetterInWord(randomWord,guessIndex,userGuess);
        }
        else if ( (guessIndex === -1) && (wordIndex === -1) ){/* not guessed and not in word*/
            numOfGuesses--;
            document.getElementById("guesses").textContent = numOfGuesses;
            guessedLetters.push(userGuess);
            document.getElementById("lettersGuesses").textContent = guessedLetters;
            if (numOfGuesses === 0) {/*  lost reset game */
                isStarted = false;
                document.getElementById("instructions").textContent = "Press Space bar to continue Start"
           
            }
        }
        else{
        /* guessed and not in word */
        /* guessed and in word */
        }

    }
    else{
        randomWord = words[Math.floor(Math.random() * words.length)];
        currentWord = "";
        lettersFound = 0;
        numOfGuesses = 12;
        for(var i = 0; i < randomWord.length; i++){
            currentWord.push("_ ");
        }
        document.getElementById("curWord").textContent = currentWord;
        document.getElementById("instructions").textContent = "Press any letter to continue Guessing"
        isStarted = true;

    }
}