function truncateString(str, num) {
  let trunc = "";
  if (str.length > num) {
    trunc = (str.slice(0, num)) + "...";
    return trunc;
  }
  return str
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
