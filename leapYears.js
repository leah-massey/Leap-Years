const leapYears = function (number) {
  return number % 400 === 0 ? true : false;
};

module.exports = leapYears;
