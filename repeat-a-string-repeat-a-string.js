function repeatStringNumTimes(str, num) {
  let repeat = "";
  while(num > 0) {
    repeat += str;
    num --;
  }
  return repeat;
}

console.log(repeatStringNumTimes("abc", 3));
