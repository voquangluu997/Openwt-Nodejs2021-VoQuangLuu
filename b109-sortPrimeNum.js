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
function sortPrimeNum(num) {
  let arrSortedPrime = [];
  for (let i = 1; i <= num; i++) {
    if (isProime(i) == true) arrSortedPrime.push(i);
  }
  return arrSortedPrime;
}
