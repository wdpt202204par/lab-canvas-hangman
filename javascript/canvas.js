class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.createBoard();

    this.pressedKey = "";
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    let x = 210, y = 750;
    this.context.beginPath();
    this.context.moveTo(x, y);

    for (let i = 0; i < this.secretWord.length; i++) {
      x += 50; this.context.lineTo(x, y);
      x += 10; this.context.moveTo(x, y);
    };

    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    this.context.beginPath();
    this.context.fillText(this.secretWord[index], 210 + index * (50 + 10), 740);
    this.context.stroke();
    this.context.closePath();
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
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
