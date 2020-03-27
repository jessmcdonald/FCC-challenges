function bouncer(arr) {
  let booly = [];
  let truthy = [];
  for (let i = 0; i < arr.length; i++) {
    booly.push(Boolean(arr[i]));
  }
  for (let j = 0; j < booly.length; j++) {
      if(booly[j] == true) {
        truthy.push(arr[j])
    }
  }
  return truthy;
}


console.log(bouncer([7, "ate", "", false, 9]));
