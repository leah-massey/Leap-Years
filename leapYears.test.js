const leapYears = require("./leapYears");

describe("leapYears", () => {
  it("returns a boolean value", () => {
    expect(typeof leapYears(400) === "boolean").toBeTruthy();
  });

  it("returns true for 400", () => {
    expect(leapYears(400)).toBe(true);
  });

  it("returns false for 500", () => {
    expect(leapYears(500)).toBe(false);
  });
});
