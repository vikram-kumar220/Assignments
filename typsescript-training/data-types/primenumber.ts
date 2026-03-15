function primeNumber(num :number):boolean {
   if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= num/2; i++) {
    if (num % i === 0) {
        console.log("not prime")
      return false;
    }
  }
 console.log("is prime")
  return true;
}
 


primeNumber(7);