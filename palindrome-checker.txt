function palindrome(str) {
  let strArr = [];
  let reverseArr = [];
  //remove non alphanumericals
  let newstr = str.toLowerCase().replace(/\W/g, '').replace(/\_/g, '');
  //split string into array of characters
  strArr = newstr.split("");
  //loop through strArr and add to reverseArr in reverse order
  for (var i = 0; i < strArr.length; i++) {
    reverseArr.unshift((strArr[i]));
  };
  console.log(strArr)
  //compare 2 arrays as strings
  if(JSON.stringify(strArr) == JSON.stringify(reverseArr)) {
    return true
  } else {
    return false
  }
  console.log(strArr)
}



console.log(palindrome("not_eye**"));
