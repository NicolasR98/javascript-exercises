const ftoc = function (fahrenheit) {
  const celsius = (((fahrenheit - 32) * 5) / 9).toFixed(1); //Shows only one decimal
  return Number(celsius);
};

const ctof = function (celsius) {
  const fahrenheit = ((celsius * 9) / 5 + 32).toFixed(1);
  return Number(fahrenheit);
};

ctof(73.2);
ftoc(100);

module.exports = {
  ftoc,
  ctof,
};
