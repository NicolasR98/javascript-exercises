const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((acc, num) => acc + num, 0);

const multiply = (arr) => arr.reduce((acc, num) => acc * num);

const power = (a, b) => a ** b;

const factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

//Add
console.log(add(2, 2));
//Subtract
console.log(subtract(10, 4));
//Sum
console.log(sum([1, 3, 5, 7, 9]));
//multiply
console.log(multiply([2, 4, 6, 8, 10, 12, 14]));
//pow
console.log(power(4, 3));
//factorial
console.log(factorial(10));

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
