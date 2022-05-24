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
    this.context.font = "80px"
    this.context.fillText(this.secretWord[index], 210 + index * (50 + 10), 740);
    this.context.stroke();
    this.context.closePath();
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.beginPath();
    this.context.font = "80px";
    for(let errorsLeft=10;errorsLeft>=0;errorsLeft--);
    this.context.fillText(letter[errorsLeft], 600+errorsLeft*(50+10), 300);
    this.context.stroke();
    this.context.closePath;
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    thiscontext.beginPath()
    for (let errorsLeft=9;errorsLeft>0;errorsLeft--){
      if (errorsLeft=9){
        this.context.moveTo(100,750)
        this.context.lineTo(150,750)
        this.context.stroke()
      }
      if (errorsLeft=8){
        this.context.moveTo(100,750)
        this.context.lineTo(125,700)
        this.context.stroke()
      
      }
      if (errorsLeft=7){
        this.context.moveTo(150,750)
        this.context.lineTo(125,700)
        this.context.stroke()
      }
      if (errorsLeft=6){
        this.context.moveTo(125,700)
        this.context.lineTo(125,200)
        this.context.stroke()
        
      }
      if (errorsLeft=5){
        this.context.moveTo(125,200)
        this.context.lineTo(200,200)
        this.context.stroke()
      }
      if (errorsLeft=4){
        this.context.moveTo(200,200)
        this.context.lineTo(200,300)
        this.context.stroke()
      }
      if (errorsLeft=3){
        this.context.moveTo(200,300)
        this.context.arc(200,325,25,Math.PI)
        this.context.stroke()
      }
      if (errorsLeft=2){
        this.context.moveTo(200,350)
        this.context.lineTo(200,450)
        this.context.stroke()
      }
      if (errorsLeft=1){
        this.context.moveTo(200,450)
        this.context.lineTo(150,550)
        this.context.stroke()
      }
      if (errorsLeft=0){
        this.context.moveTo(200,450)
        this.context.lineTo(250,550)
        this.context.stroke()
      }
    }

    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
