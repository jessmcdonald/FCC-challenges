function mutation(arr) {
  let split1 = arr[0].toLowerCase();
  let split2 = arr[1].toLowerCase();
  console.log(split1, split2);

  for (let i = 0; i < split2.length; i++) {
    if (split1.indexOf(split2[i]) < 0) {
      return false
    }
  }
  return true
}

console.log(mutation(["hELLo", "he"]));
