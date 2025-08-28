import showScore from "./tennisScore";

describe("Tennis Score", () => {
  it("game empieza con ambos en cero", () => {
    expect(showScore(0)).toEqual("Love - Love");
  });

  it("Jugador 1 hace un punto", () => {
    expect(showScore(15)).toEqual("15 - Love");
  });
});




