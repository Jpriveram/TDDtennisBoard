
class TennisScorer{

  constructor(){
    this.player1Points = 0;
    this.player2Points = 0;
  }
  showScore() {
    if (this.player1Points === 1 && this.player2Points === 0)
    return "15 - Love";
  
    if (this.player1Points === 2 && this.player2Points === 0)
    return "30 - Love";
  
    if (this.player1Points === 3 && this.player2Points === 0)
    return "40 - Love";

    if(this.player2Points === 1 && this.player1Points === 0)
    return "Love - 15";

    if(this.player2Points === 2 && this.player1Points === 0)
    return "Love - 30";

    if(this.player2Points === 3 && this.player1Points === 0)
    return "Love - 40";

    if(this.player1Points === 3 && this.player2Points === 3)
    return "Deuce";

    return "Love - Love";

  }

  player1Scores(){
    this.player1Points++;
  }
  player2Scores(){
    this.player2Points++;
  }
}




export default TennisScorer;
