const repeatString = function (str, times) {
  if (times < 0) {
    return "ERROR";
  }

  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
};

repeatString("hey", 3);

module.exports = repeatString;
