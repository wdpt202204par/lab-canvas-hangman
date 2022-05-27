class HangmanCanvas {
  constructor(secretWord) {
    this.canvas=document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
    this.guessedOrigin= {x:400, y:this.canvas.height-50};
    this.badAttemptsOrigin={x:700, y:300};
    this.hangmanPosition={x:80, y:this.canvas.height-90};
    
    this.createBoard();
  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawLines();
  }

  drawLines() {
    let x = this.guessedOrigin.x, y = this.guessedOrigin.y;
    this.context.beginPath();
    this.context.moveTo(x, y);

    for (let i = 0; i < this.secretWord.length; i++) {
      x += 50; this.context.lineTo(x, y);
      x += 20; this.context.moveTo(x, y);
    };

    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    const x= this.guessedOrigin.x+(index*70)+11
    const y = this.guessedOrigin.y-5
    this.context.font = "50px Arial"
    this.context.fillText(this.secretWord[index].toUpperCase(), x,y);
  }

  writeWrongLetter(letter, errorsLeft) {
    const x = this.badAttemptsOrigin.x+(9-errorsLeft)*50
    const y = this.badAttemptsOrigin.y
    this.canvas.style.letterSpacing = "2px"
    this.context.font = "50px Arial"
    this.context.fillText(letter.toUpperCase(),x,y)
    this.drawHangman(errorsLeft);
    }
  

  drawHangman(errorsLeft) {
    this.context.beginPath();
     
    switch(errorsLeft){
      case 9:
        this.context.moveTo(50,750);
        this.context.lineTo(350,750);
        break;
      
      case 8:
        this.context.moveTo(150,750);
        this.context.lineTo(150,200);
        break;
      
      case 7:
        this.context.moveTo(150,200);
        this.context.lineTo(325,200);
        break;    
      case 6:
        this.context.moveTo(150,300);
        this.context.lineTo(250,200);
        break;        
      case 5:
        this.context.moveTo(300,200);
        this.context.lineTo(300,350);
        break;      
      case 4:
        this.context.arc(300,375,25,0,2*Math.PI);
        this.context.fill()
        break;      
      case 3:
        this.context.moveTo(300,400);
        this.context.lineTo(300,500);
        break;      
      case 2:
        this.context.moveTo(275,425);
        this.context.lineTo(325,425);
        break;     
      case 1:
        this.context.moveTo(300,500);
        this.context.lineTo(280,550);
        break;      
      case 0:
        this.context.moveTo(300,500);
        this.context.lineTo(320,550);
        break;
    }
    this.context.stroke();
    this.context.closePath()
  }

  gameOver() {
    alert(`YOU LOSE! Secret word was : ${hangman.secretWord}.`)
  }

  winner() {
    alert('YOU WIN!')
  }
}