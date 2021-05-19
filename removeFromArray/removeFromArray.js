const removeFromArray = function (arr, ...targets) {
  
  //Create copy of array to avoid mutation
  let copyArr = [...arr];

  targets.forEach((target) => {
    if (copyArr.indexOf(target) !== -1) {
      let index = copyArr.indexOf(target);
      copyArr.splice(index, 1);
    }
  });
  return copyArr;
};

module.exports = removeFromArray;
