function sym(args) {
  let argArr = [];
  for(let i = 0; i < arguments.length; i++){
    argArr.push(arguments[i])
  }

  let findDiffs = (arr1, arr2) => {
    let result = [];
    
    arr1.forEach(function(item){
      if(arr2.indexOf(item) < 0 && result.indexOf(item) < 0){
          result.push(item)
      }
    })
    arr2.forEach(function(item){
      if(arr1.indexOf(item) < 0 && result.indexOf(item) < 0){
        result.push(item)
      }
    })
    return result
  }
  return argArr.reduce(findDiffs);
}

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
