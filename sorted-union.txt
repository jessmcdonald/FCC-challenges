function uniteUnique(arr) {
  let newArr = [];
  for(let i = 0; i < arguments.length; i++){
    for(let j = 0; j < arguments[i].length; j++){
      newArr.indexOf(arguments[i][j]) === -1 ? newArr.push(arguments[i][j]) : console.log("already in array");
    }
  }; 
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
