class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters ='';
    this.errorsLeft=10;
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
    return !this.letters.includes(letter)
  }
  addCorrectLetter(letter) {
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.errorsLeft --
    this.letters.push(letter)
    }

  checkGameOver() {
    return this.errorsLeft === 0
  }

  checkWinner() {
    return this.secretWord.split("").sort().join("") === this.guessedLetters.split("").sort().join("") && !this.checkGameOver();
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  });
}

document.addEventListener('keydown', event => {

  if(hangman.checkIfLetter(event.keyCode)){
    const myKey=event.key.toLowerCase();
    
    if(hangman.checkClickedLetters(myKey)&!hangman.guessedLetters.includes(myKey)){
      if(hangman.secretWord.includes(myKey)){
        let position=0
        let index;
        while(hangman.secretWord.indexOf(myKey,position)>=0){
          index=hangman.secretWord.indexOf(myKey,position);
          position = index+1;
          hangman.addCorrectLetter(myKey);
          hangmanCanvas.writeCorrectLetter(index)
        }
        if (hangman.checkWinner()){
          hangmanCanvas.winner()
        }
      }
      else{
        hangman.addWrongLetter(myKey);
        hangmanCanvas.writeWrongLetter(myKey,hangman.errorsLeft);
        console.log('errorsleft:',hangman.errorsLeft)
        if(hangman.checkGameOver()){
          hangmanCanvas.gameOver()
        }
      }
    }
    else{
      alert(`You already tried ${event.key.toUpperCase()}.`)
    }
  }
  else{
    alert(`${event.key.toUpperCase()} is not a letter`)
  }
});

