function frankenSplice(arr1, arr2, n) {
  let arr3 = arr1.slice(0, arr1.length);
  let arr4 = arr2;
  for (let i = 0; i < arr3.length; i++) {
    arr4.splice(n, 0, arr3[i])
    n++
    }
  return arr4;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
