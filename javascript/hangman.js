class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = []
    this.guessedLetters =''
    this.errorsLeft=10
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if (keyCode>=65 && keyCode<=90){
      return true
    }
    else {
      return false
    }
  }

  checkClickedLetters(letter) {
    let result = true
    for (let i=0; i<this.letters.length; i++){ 
      if (letter===this.letters[i]){
        result = false
      }
    }
    return result
  }
  addCorrectLetter(letter) {
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1
    if (this.checkClickedLetters){
    this.letters.push(letter)
    }
  }

  checkGameOver() {
    while (this.errorsLeft >0){
      return false
    }
    if (this.errorsLeft === 0){
      return true
    }
  }

  checkWinner() {
    return ((this.guessedLetters.length === this.secretWord.length) && !this.checkGameOver())
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {

  //hangmanCanvas.writeCorrectLetter(3);
  

  // React to user pressing a key
  // ... your code goes here
  if (Hangman.checkIfLetter(event.KeyCode)){
    if (Hangman.checkClickedLetters()){
      if(this.secretWord.includes(this.letter)){
        Hangman.addCorrectLetter(this.letter)
        HangmanCanvas.writeCorrectLetter(this.secretWord.indexOf(this.letter))
      }
      else{
        Hangman.addWrongLetter(this.letter)
        HangmanCanvas.writeWrongLetter(this.letter,this.errorsLeft)
      }
    }
  }
  // n. Check if "event.keyCode" is in secretWord

  

  /*if // Pressed letter is in the secretWord
    hangmanCanvas.writeCorrectLetter()
  } else {
    writeWrongLetter()
  }*/

});
