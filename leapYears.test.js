const leapYears = require("./leapYears");

describe("leapYears", () => {
  it("returns a boolean value", () => {
    expect(leapYears(400)).toEqual(true);
  });
});
