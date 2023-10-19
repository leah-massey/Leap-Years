const leapYears = require("./leapYears");

describe("leapYears", () => {
  it("returns a boolean value", () => {
    expect(typeof leapYears(400) === "boolean").toBeTruthy();
  });

  it("returns true for 400", () => {
    expect(leapYears(400)).toBe(true);
  });
});
