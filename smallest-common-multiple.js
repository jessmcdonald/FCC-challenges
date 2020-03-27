function smallestCommons(arr) {
  //make new arr including full range
  let fullRange = [];
  for(let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--){
    fullRange.push(i)
  }

  let lcm = fullRange[0];
  for (let i = 1; i < fullRange.length; i++) {
    let GCD = gcd(lcm, fullRange[i]);
    lcm = (lcm * fullRange[i]) / GCD
  }
  return lcm;
  //euclidean algo
  function gcd(x, y) {
    if (y === 0) return x;
    else return gcd(y, x % y);
  }
}


console.log(smallestCommons([2,10]));
