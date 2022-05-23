class Hangman {
  constructor(words) {
    this.words = words; // ['salut', ...]
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    // ... your code goes here
  }

  pickWord() {
    let randomW = Math.floor(Math.random() * this.words.length); // 4
    return this.words[randomW];

    // ... your code goes here
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }

    // ... your code goes here
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
    // ... your code goes here
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    // ... your code goes here
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    // ... your code goes here
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else {
      return false;
      // ... your code goes here
    }
  }
  // this.words = words; // ['salut', ...]
  // this.secretWord = this.pickWord();
  // this.letters = [];
  // this.guessedLetters = "";
  // this.errorsLeft = 10;
  checkWinner() {
    let rightAnswers = 0;
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.guessedLetters.includes(this.secretWord[i])) {
        rightAnswers++;
      }
    }
    if (rightAnswers === this.secretWord.length) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
  startGameButton.addEventListener("click", (event) => {
    hangman = new Hangman([
      "node",
      "javascript",
      "react",
      "miami",
      "paris",
      "amsterdam",
      "lisboa",
    ]);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener("keydown", (event) => {
  // React to user pressing a key
  // ... your code goes here
});
