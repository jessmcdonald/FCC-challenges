function findLongestWordLength(str) {
  str = str.split(" ");
  let longest = str.sort(function(a,b) {
    return b.length - a.length;
  })[0]
  return longest.length;
}

console.log(findLongestWordLength("Thehhhhhhhhhhhhhhh quick brown fox jumped over the lazy dog"));
