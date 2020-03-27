function fearNotLetter(str) {
  let code = null;
  for(let i = 0; i < str.length; i++){
    code = str.charCodeAt(i);

    if(code !== str.charCodeAt(0) + i){
      return String.fromCharCode(code - 1);
    }  
  }
  return undefined
}

console.log(fearNotLetter("stvwx"));
