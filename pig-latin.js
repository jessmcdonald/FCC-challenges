function translatePigLatin(str) {
  let consonantReg = /^[^aeiou]+/;
  let strConsonant = str.match(consonantReg);
  return strConsonant !== null
    ? str
        .replace(consonantReg, "")
        .concat(strConsonant)
        .concat("ay")
    : str.concat("way")
}

console.log(translatePigLatin("cononsonnant"));
