function rot13(str) {

  return (
          str
            //split string into array of characters
            .split("")
            //iterate over each character
            .map.call(str, function(char) {
              //convert to character code
              let a = char.charCodeAt(0)
              //check if not alpha
              if(a < 65 || a > 90) {
                //return unconverted character
                return String.fromCharCode(a)
              } else if (a < 78) {
                return String.fromCharCode(a + 13)
              }
              return String.fromCharCode(a - 13)
            })
            .join("")
  );
  }

console.log(rot13("SERR PBQR PNZC"));
