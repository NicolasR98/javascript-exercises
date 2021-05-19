const leapYears = function (year) {
  let isLeapYear = Boolean();

  if (year > 900) {
    if (year % 400 === 0) isLeapYear = true;
    if (year % 4 === 0 && year % 100 !== 0) isLeapYear = true;
  }

  return (isLeapYear = false);
};

leapYears(1900);
leapYears(1600);

module.exports = leapYears;
