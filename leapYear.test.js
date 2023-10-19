const leapYear = require("./leapYear");

describe("leapYear", () => {
  it("returns a boolean value", () => {
    expect(typeof leapYear(400) === "boolean").toBeTruthy();
  });

  it("returns true for number divisible by 400", () => {
    expect(leapYear(2000)).toBe(true);
  });

  it("returns false for numbers not divisible by 400", () => {
    expect(leapYear(700)).toBe(false);
  });

  it("returns true for years divisible by 4 but not by 100", () => {
    expect(leapYear(2008)).toBe(true);
  });

  it("returns false for years not divisible by 4", () => {
    expect(leapYear(2009)).toBe(false);
  });
});
