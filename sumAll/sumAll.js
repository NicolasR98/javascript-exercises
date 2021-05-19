const sumAll = function (...nums) {
  for (let num of nums) {
    if (typeof num !== "number" || num < 0) {
      return "ERROR";
    }
  }

  let result = Number();
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
};

sumAll(1, 4);
module.exports = sumAll;
