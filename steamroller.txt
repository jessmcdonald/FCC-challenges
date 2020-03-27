function steamrollArray(arr) {
  let fluttenedArr = [];

  let flutten = function(arg) {
    if (!Array.isArray(arg)){
      fluttenedArr.push(arg)
    } else {
      for (var a in arg) {
        flutten(arg[a])
      }
    }
  }
  arr.forEach(flutten)
  return fluttenedArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
