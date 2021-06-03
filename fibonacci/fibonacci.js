const fibonacci = (count) => {
  if (count < 0) return "OOPS";
  if (count === 1) return 1;

  let a = 0;
  let b = 1;

  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  return b;
};

console.log(fibonacci(4));

module.exports = fibonacci;
