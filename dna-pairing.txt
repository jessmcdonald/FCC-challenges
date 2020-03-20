function pairElement(str) {
  let StrArray = [];
  let DNArray = [];
  StrArray = str.split("");
  for(let i = 0; i < StrArray.length; i++){
    if(StrArray[i] == "A"){
      DNArray.push([StrArray[i], "T"])
    } else if(StrArray[i] == "T"){
      DNArray.push([StrArray[i], "A"])
      } else if(StrArray[i] == "G"){
      DNArray.push([StrArray[i], "C"])
      } else {
      if(StrArray[i] == "C"){
      DNArray.push([StrArray[i], "G"])}
    }
    }
  return DNArray;
}

console.log(pairElement("GCG"));
