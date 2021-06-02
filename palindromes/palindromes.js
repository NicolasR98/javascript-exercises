const palindromes = (str) => {
  const cleanStr = str.toLowerCase().replace(/[^A-Za-z]/g, "");
  return cleanStr
    .split("")
    .reverse("")
    .join("") === cleanStr;
};

module.exports = palindromes;
