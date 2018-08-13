var words = ["England", "Scottland", "Ireland","Australia","Brazil","Belgium","Canada","Fiji","France","Israel",
             "Italy","Japan","Mexico","Portugal","Spain","Tonga"];
var guessedLetters = [];
var randomWord = words[Math.floor(Math.random() * words.length)];
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
}