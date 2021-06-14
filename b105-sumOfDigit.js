function sumOfDigit(num) {
  let sum = 0;
  count = 0;
  while (sum == 0 || sum >= 10) {
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    if (sum >= 10) {
      num = sum;
      sum = 0;
    }
    count++;
  }
  return count;
}
