const leapYears = require("./leapYears");

describe("leapYears", () => {
  it("returns a boolean value", () => {
    expect(typeof leapYears(400) === "boolean").toBeTruthy();
  });

  it("returns false for 500", () => {
    expect(leapYears(500)).toBe(false);
  });

  it("returns true for number divisible by 400", () => {
    expect(leapYears(2000)).toBe(true);
  });
});
