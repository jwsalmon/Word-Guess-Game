var words = ["England", "Scottland", "Ireland", "Australia",
    "Brazil", "Belgium", "Canada", "Fiji",
    "France", "Israel", "Italy", "Japan",
    "Mexico", "Portugal", "Spain", "Tonga"];
var drawHanged = ["assets/images/hangman12.png", "assets/images/hangman11.png", "assets/images/hangman10.png", "assets/images/hangman9.png",
    "assets/images/hangman8.png", "assets/images/hangman7.png", "assets/images/hangman6.png", "assets/images/hangman5.png",
    "assets/images/hangman4.png", "assets/images/hangman3.png", "assets/images/hangman2.png", "assets/images/hangman1.png"];
var flags = ["assets/images/flag-of-England.png", "assets/images/flag-of-Scottland.png", "assets/images/flag-of-Ireland.png", "assets/images/flag-of-Australia.png",
    "assets/images/flag-of-Brazil.png", "assets/images/flag-of-Belgium.png", "assets/images/flag-of-Canada.png", "assets/images/flag-of-Fiji.png",
    "assets/images/flag-of-France.png", "assets/images/flag-of-Israel.png", "assets/images/flag-of-Italy.png", "assets/images/flag-of-Japan.png",
    "assets/images/flag-of-Mexico.png", "assets/images/flag-of-Portugal.png", "assets/images/flag-of-Spain.png", "assets/images/flag-of-Tonga.png"];
var wordFlagIndex = -1;
var guessedLetters = [];
var guessIndex = -1;
var wordIndex = -1;
var lettersFound, numOfGuesses;
var winsCnts = 0;
var currentWord = [];
var randomWord = "";
var isStarted = false;
var imgTag = document.getElementById("hangman");
var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/sound/deathmarch.wav");

/*find all occurence of a letter in a word  */
function findLetterInWord(word, idx, element) {
    var indices = [];
    console.log("you pressed: " + element);
    console.log("which is the " + idx + "of the word " + word);
    while (idx != -1) {
        indices.push(idx);
        idx = word.indexOf(element, idx + 1);
    }
    console.log(indices);
    while (indices.length > 0) {
        var letterPos = indices.pop();
        currentWord[letterPos] = element;
        lettersFound++;
    }
    document.getElementById("curWord").textContent = currentWord.join("");
}
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    if ((/[a-zA-Z]/.test(userGuess)) && isStarted) {
        guessIndex = guessedLetters.indexOf(userGuess);
        wordIndex = randomWord.indexOf(userGuess);
        /* not guesed yet and in word*/
        console.log(guessIndex);
        console.log(wordIndex);
        if ((guessIndex === -1) && (wordIndex !== -1)) {
            /* find first index of letter. then search rest of word to see if letter occurs again make this a function */
            //lettersFound++;
            guessedLetters.push(userGuess);
            document.getElementById("lettersGuesses").textContent = guessedLetters.join("");
            findLetterInWord(randomWord, wordIndex, userGuess);
            console.log("you found " + lettersFound + " letters");
            if (lettersFound === randomWord.length) {
                imgTag.setAttribute("src", flags[wordFlagIndex]);
                isStarted = false;
                winsCnts++;
                document.getElementById("wins").textContent = winsCnts;
                document.getElementById("instructions").textContent = "Press Space bar to play again";
            }

        }
        else if ((guessIndex === -1) && (wordIndex === -1)) {// not guessed and not in word
            numOfGuesses--;
            document.getElementById("guesses").textContent = numOfGuesses;
            guessedLetters.push(userGuess);
            document.getElementById("lettersGuesses").textContent = guessedLetters.join("");
            imgTag.setAttribute("src", drawHanged[numOfGuesses]);
            if (numOfGuesses === 0) {// lost reset game 
                isStarted = false;
                document.getElementById("instructions").textContent = "Press Space bar to play again";
                audioElement.play();
            }
        }
        else {
            /* guessed and not in word */
            /* guessed and in word */
        }

    }
    else if (!isStarted) {
        currentWord = [];
        wordFlagIndex = Math.floor(Math.random() * words.length);
        randomWord = words[wordFlagIndex];
        randomWord = randomWord.toLowerCase();
        lettersFound = 0;
        numOfGuesses = 12;
        for (var i = 0; i < randomWord.length; i++) {
            currentWord.push("_ ");
        }
       // var curWord = " ";
       // curWord = currentWord.join("");
       // console.log(curWord);
        document.getElementById("curWord").textContent = currentWord.join("");
        document.getElementById("instructions").textContent = "Press any letter to continue Guessing"
        imgTag.setAttribute("src", "assets/images/hangman0.png");
        isStarted = true;
        guessedLetters = [];
        document.getElementById("lettersGuesses").textContent = guessedLetters.join("");
        document.getElementById("guesses").textContent = numOfGuesses;
    }
}