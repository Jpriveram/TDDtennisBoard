import TennisScorer from "./tennisScore";

describe("Tennis Score", () => {
  it("game empieza con ambos en cero", () => {
    const scorer = new TennisScorer();
    expect(scorer.showScore()).toEqual("Love - Love");
  });

  it("Jugador 1 hace un punto", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("15 - Love");
  });

  it("Jugador 1 hace dos puntos", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("30 - Love");
  });

  it("Jugador 1 hace tres puntos", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("40 - Love");
  });
});




