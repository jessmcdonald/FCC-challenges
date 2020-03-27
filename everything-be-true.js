function truthCheck(collection, pre) {
  let answer = null;
  for (let i = 0; i < collection.length; i++){
    if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])){
      answer = true;
    } else {
      answer = false;
      break
    }
  }
  return answer
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
