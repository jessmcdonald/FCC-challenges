function pairwise(arr, arg) {
  let indicesSum = 0;
  let indices = [];

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(i !== j
      && arr[i] + arr[j] === arg
      && indices.indexOf(i) === -1
      && indices.indexOf(j) === -1
      ){
        indices.push(i, j);
        indicesSum += i + j
      }
    }
  }
  return indicesSum;
}

console.log(pairwise([1,1,1], 2));
