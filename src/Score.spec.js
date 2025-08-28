import showScore from "./tennisScore";

describe("Tennis Score", () => {
  it("game empieza con ambos en cero", () => {
    expect(showScore()).toEqual("Love - Love");
  });
});




