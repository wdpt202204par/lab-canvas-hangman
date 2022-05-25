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
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    
    //on fait disparaitre l'image et le bouton lorsque la partie démarre
    document.querySelector("img").style.display = "none"
    document.querySelector("button").style.display = "none"
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  hangmanCanvas.writeCorrectLetter(3)
  //penser a ajouter un toUppercase() avant d'afficher la lettre
  const myKey=event.key
  console.log("pressed key=",myKey)
  if (hangman.checkIfLetter(event.KeyCode)){
      if(hangman.secretWord.includes(myKey)){
        hangman.addCorrectLetter(myKey)
        let index = hangman.secretWord.indexOf(myKey);
        hangmanCanvas.writeCorrectLetter(index);
        //hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(myKey))
      }
      else{
        hangman.addWrongLetter(myKey)
        hangmanCanvas.writeWrongLetter(myKey,hangman.errorsLeft)
      }
    }
  });

