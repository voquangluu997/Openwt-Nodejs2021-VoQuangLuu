function zerosFactorial(num) {
  let gt = 1;
  for (let i = num; i > 0; i--) {
    gt *= i;
  }
  let count = 0;
  while (gt % 10 == 0) {
    gt /= 10;
    count++;
  }
  return count;
}
