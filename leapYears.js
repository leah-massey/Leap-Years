const leapYears = function (number) {
  return number % 400 === 0 || (number < 100 && number % 4 === 0)
    ? true
    : false;
};

module.exports = leapYears;
