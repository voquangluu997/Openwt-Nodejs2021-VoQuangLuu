function isIncrementNum(num) {
  let currNum = num % 10;
  num = Math.floor(num / 10);
  while (num > 0) {
    if (num % 10 >= currNum) return false;
    num = Math.floor(num / 10);
  }

  return true;
}
