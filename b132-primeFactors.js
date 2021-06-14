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
function primeFactors(num) {
  let result = [];
  for (let i = 2; i <= num; i++) {
    while (is_prime(i) && num % i === 0) {
      if (!result.includes(i)) result.push(i);
      num /= i;
    }
  }
  return result;
}
