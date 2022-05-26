class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    console.log("test")
    this.context.clearRect(0,0,800,1200)
    this.drawLines()
  }

  drawLines() {
    // ... your code goes here
    let position = 50
    for (let i = 0; i < this.secretWord.length; i++){
      this.context.fillRect(position,700, 50, 1)
      position += 65 
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  
    this.context.font = "70px serif"
    console.log(this.secretWord)
    this.context.textAlign = "center"
    if (index === 0){
      this.context.fillText(this.secretWord[index], 50, 695)
    }else{
      this.context.fillText(this.secretWord[index], 50 + (index * 50), 695)
    }
    

  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.font = "64px serif"
    this.context.fillText(letter, 500 + (errorsLeft * 64), 70) // Resolution 800 * 1200
  }

  drawHangman(errorsLeft) {
    // ... your code goes here

  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
