const leapYear = function (number) {
  return number % 400 === 0 || (number % 100 !== 0 && number % 4 === 0)
    ? true
    : false;
};

module.exports = leapYear;
