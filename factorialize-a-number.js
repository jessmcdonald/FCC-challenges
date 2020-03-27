function factorialize(num) {
  let total = 1;
  for(let i = 1; i <= num; i++) {
    total = total * i;
  }
  return total;
}

console.log(factorialize(10));
