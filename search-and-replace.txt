function myReplace(str, before, after) {
  let newStr = null;
  let newWord = null;

  if(before[0] === before[0].toUpperCase()){
    const newWord = after.replace(/^\w/, c => c.toUpperCase());
    newStr = str.replace(before, newWord)
  } else {
    newStr = str.replace(before, after)
  };
  return newStr;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

