var words = ["England", "Scottland", "Ireland","Australia","Brazil","Belgium","Canada","Fiji","France","Israel",
             "Italy","Japan","Mexico","Portugal","Spain","Tonga"];
var guessedLetters = [];
var currentWord = [];
var randomWord = "";
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    if (/[a-zA-Z]/.test(userGuess)){

    }
    else{
        randomWord = words[Math.floor(Math.random() * words.length)];
        for(var i = 0; i < randomWord.length; i++){
            currentWord.push("_ ");
        }
        document.getElementById("curWord").textContent = currentWord;
        currentWord="";
        document.getElementById("instructions").textContent = "Press any letter to continue Guessing"

    }
}