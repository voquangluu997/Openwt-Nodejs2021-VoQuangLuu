function isProime(num) {
  let isPrime = true;
  if (num == 2) return true;
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

function smallestPrimeNum(num) {
  for (let i = num + 1; ; i++) {
    if (isProime(i)) return i;
  }
}
