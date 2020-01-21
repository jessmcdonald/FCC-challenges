function confirmEnding(str, target) {
  if (str.slice(-target.length, str.length) == target) {
    return true
  }
  return false;
}

console.log(confirmEnding("Bastian", "tian"));


