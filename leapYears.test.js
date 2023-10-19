const leapYears = require("./leapYears");

describe("leapYears", () => {
  it("returns a boolean value", () => {
    expect(typeof leapYears(400) === "boolean").toBeTruthy();
  });

  it("returns true for number divisible by 400", () => {
    expect(leapYears(2000)).toBe(true);
  });

  it("returns false for numbers not divisible by 400", () => {
    expect(leapYears(700)).toBe(false);
  });

  it("returns true for years divisible by 4 but not by 100", () => {
    expect(leapYears(2008)).toBe(true);
  });
});
