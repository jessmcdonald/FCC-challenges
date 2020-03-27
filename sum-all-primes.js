function sumPrimes(num) {
  let result = 0;
  for(let i = 2; i <= num; i++){
    let isPrime = true;
    for(let factor = 2; factor < i; factor++){
      if(i % factor == 0){
        isPrime = false;
        break
      }
    }
    if(isPrime){
      result += i;
    }
  }
  return result
}

console.log(sumPrimes(10));
