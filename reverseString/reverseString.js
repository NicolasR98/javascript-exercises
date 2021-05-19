const reverseString = function (str) {
  const reverseStr = [...str].reverse().join("");
  return reverseStr;
};

reverseString("hello");
module.exports = reverseString;
