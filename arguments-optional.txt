function addTogether(arg) {

  //check if each argument is a number
  const checkIfNum = function(num) {
    if (typeof num !== "number"){
      return undefined
    } else {
      return num
    }
  }

  //if more than one argument, check if numbers and sum
  if(arguments.length > 1){
    let x = checkIfNum(arguments[0]);
    let y = checkIfNum(arguments[1])
    if( x === undefined || y === undefined){
      return undefined
    } else {
      return x + y
    }
    //else store first argument for new function
  } else {
    let z = arguments[0]

    if (checkIfNum(z)){
      return function(arg2) {
        if( z === undefined || checkIfNum(arg2) === undefined) {
          return undefined
        } else {
          //if numbers sum them
          return z + arg2
        }
      }
    }
  }
}

console.log(addTogether(2,3));
