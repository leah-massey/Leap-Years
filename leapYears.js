const leapYears = function (number) {
  if (number % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = leapYears;
