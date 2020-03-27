function chunkArrayInGroups(arr, size) {
  let newarr = [];
  for (let i = 0; i < arr.length; i += size){
    newarr.push(arr.slice(i, i + size))
  }
  return newarr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2));
