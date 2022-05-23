class Hangman {
  constructor(words) { // ['asdfa']
    this.words = words;
    this.secretWord = this.pickWord()

  }

  pickWord() {
    const pickedWord = Math.floor(Math.random() * this.words.length).toString()
    return pickedWord;
  }

//console.log(pickWord)

  //console.log(secretWord);
 

  checkIfLetter(keyCode) {
    const letterArray = Array.from(this.secretWord);
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    const gessedLetter = '';
    
/*const letterFound = this.secretWord.split() {
      for (let i = 0; i<= this.secretWord.length; i++) {
        if (letterCalled === this.secretWord.[i])
      }
    }*/

  }

  addCorrectLetter(letter) {
    // ... your code goes here
  }

  addWrongLetter(letter) {
    // ... your code goes here
  }

  checkGameOver() {
    // ... your code goes here
  }

  checkWinner() {
    // ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
