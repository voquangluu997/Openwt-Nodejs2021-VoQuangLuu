function getSum(num) {
  let sum = num;
  for (let i = 2; i <= 8; i += 2) {
    sum += num / i;
  }
  return sum;
}
