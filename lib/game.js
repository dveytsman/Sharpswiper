class Game{
  constructor (){
    this.score = 0;
    this.highscore = localStorage.getItem('highscore') || 0;


  }

}

export default Game;
